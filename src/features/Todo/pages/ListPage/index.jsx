import queryString from 'query-string'
import React, { useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'

ListPage.propTypes = {}

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ]

  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()
  const [todoList, setTodoList] = useState(initTodoList)
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search)
    return params.status || 'all'
  })

  useEffect(() => {
    const params = queryString.parse(location.search)
    setFilterStatus(params.status || 'all')
  }, [location.search])

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList]

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: todo.status === 'new' ? 'completed' : 'new',
    }
    setTodoList(newTodoList)
  }

  const handleShowAllClick = () => {
    const queryParams = { status: 'all' }
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    })
  }

  const handleShowCompletedClick = () => {
    const queryParams = { status: 'completed' }
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    })
  }

  const handleShowNewClick = () => {
    const queryParams = { status: 'new' }
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    })
  }

  const renderedTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filterStatus === 'all' || todo.status === filterStatus
    )
  }, [todoList, filterStatus])

  const handleTodoFormSubmit = (values) => {
    console.log('Form values: ', values)

    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    }

    const newTodoList = [...todoList, newTodo]
    setTodoList(newTodoList)
  }
  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>All</button>
        <button onClick={handleShowCompletedClick}>Completed</button>
        <button onClick={handleShowNewClick}>New</button>
      </div>
    </div>
  )
}

export default ListPage
