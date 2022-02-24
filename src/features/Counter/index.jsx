import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 32,
    padding: '0 30px',
  },
})

CounterFeature.propTypes = {}

function CounterFeature(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  const handleIncrement = () => {
    const action = increment()
    dispatch(action)
  }

  const handleDecrement = () => {
    const action = decrement()
    dispatch(action)
  }

  return (
    <div>
      Counter: {counter}
      <div>
        <Button className={classes.root} onClick={handleIncrement}>
          Increase
        </Button>
        <Button className={classes.root} onClick={handleDecrement}>
          Decrease
        </Button>
      </div>
    </div>
  )
}

export default CounterFeature
