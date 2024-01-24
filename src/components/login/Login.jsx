import React, { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
const Login = ({setname, name, }) => {
  const [save, setsave] = useState ('')
  const saveLogin = () => {
    setname(save)
    navigate ('/profile')
    
  }

  const navigate = useNavigate()
 
  
  return (
    <div className='loginpage'>
      <div className='login'>
        <h1> Enter Your Name</h1>
        <h1>Please!!!</h1>
        <input placeholder='Name . . .' onChange={(e) => setsave(e.target.value)} type="text" />
        <input placeholder='Password . . .' type="password" />
        <button onClick={saveLogin}>save</button>
      </div>
    </div>
  )
}

export default Login