import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from 'api/userApi'
import StorageKeys from 'constants/storage-keys'

export const register = createAsyncThunk('user/register', async (payload) => {
  // call the api to register the user
  const data = await userApi.register(payload)

  // save the token to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt)
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

  return data.user
})

export const login = createAsyncThunk('user/login', async (payload) => {
  // call the api to register the user
  const data = await userApi.login(payload)

  // save the token to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt)
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

  return data.user
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    setting: {},
  },
  reducers: {
    logout: (state) => {
      // clear the token and user from local storage
      localStorage.removeItem(StorageKeys.TOKEN)
      localStorage.removeItem(StorageKeys.USER)

      // clear the current user
      state.current = {}
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload
    },
  },
})

const { actions, reducer } = userSlice
export const { logout } = actions
export default reducer
