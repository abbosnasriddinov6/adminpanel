import React, { useState } from 'react'
import './Header.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import Login from '../login/Login'
import Teachers from '../teachers/Teachers'
import Students from '../students/Students'
import Profile from '../profile/Profile'
import { bars, profile, student, teacher } from '../../assets'
const Header = ({ name }) => {
  const navigate = useNavigate()
  { name ? null : navigate('/login') }
  const [open, setopen] = useState(true)

  const openSidebar = () => {
    setopen(!open)
  }


  return (
    <div className='header'>


      {open ?
        <div className='nav1'>
          <div className='nav2'>
            <button onClick={openSidebar}><img src={bars} alt="" /></button>
          </div>
          <div className='icons'>
            <img src={profile} alt="" />
            <img src={teacher} alt="" />
            <img src={student} alt="" />
          </div>
        </div>
        
        

        : <div className='sidebar'>

          <div className='logo'>
            <div className='button-outside'>

            <button onClick={openSidebar}>
              <div className='img'>
                  <img src={bars} alt="" />
              </div>
            </button>
            </div>
          </div>

          <div className='links'>
            <div className='all-links'>
            <div className='profile'>
              <img src={profile} alt="" />
                <NavLink to='/profile'><h4>Profile</h4></NavLink>
            </div>
            <div className='teacher'>
              <img src={teacher} alt="" />
                <NavLink to='/teachers'><h4>Teachers</h4></NavLink>
            </div>
            <div className='student'>
              <img src={student} alt="" />
                <NavLink to='/students'><h4>Students</h4></NavLink>
            </div>
            </div>
          </div>
        </div>
      }

      {/* <Login /> */}


    </div>
  )
}

export default Header