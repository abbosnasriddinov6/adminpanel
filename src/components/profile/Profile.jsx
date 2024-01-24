import React from 'react'
import './Profile.scss'
import { NavLink, useNavigate } from 'react-router-dom'
const Profile = ({name, setname, }) => {
  const navigate = useNavigate()
  const deleteFunc = () => {
    setname('')
    navigate('/login')
    
  }
  
   {
    name? navigate('/profile')
    :
    navigate('/login')

  }
  
  return (
    <div className='profile'>
       <div className='card'>
        <h1>Welcome mr  {name} !!!</h1>
        <h1>To our new website</h1>
        <button onClick={deleteFunc}>Log  out</button>
       </div>
    </div>
  )
}

export default Profile