import React from 'react'
import RegisterForm from '../RegisterForm'

Register.propTypes = {}

function Register(props) {
  const handleSubmit = (values) => {
    console.log('Register Form Values: ', values)
  }

  return (
    <div>
      <RegisterForm onClick={handleSubmit} />
    </div>
  )
}

export default Register
