import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/header/Header'
import Login from './components/login/Login'
import Teachers from './components/teachers/Teachers'
import Students from './components/students/Students'
import Profile from './components/profile/Profile'
import Addstudent from './components/addstudent/Addstudent'
import Addteacher from './components/addTeacher/Addteacher'


const App = () => {
  const [name, setname] = useState('')

  return (

    <div className='body'>
      <Router>
        <Header name={name} />
        <div className='topside'>
          <div className='navbar'>
            <h1>You can check now  !!!</h1>
            <h1>{name}</h1>
          </div>
          <div className='pages'>
            <Routes>
              {/* <Route path='/' element={<Header name={name}/>}/> */}
              <Route path='login' element={<Login setname={setname} name={name} />} />
              <Route path='teachers' element={<Teachers />} />
              <Route path='students' element={<Students />} />
              <Route path='profile' element={<Profile setname={setname} name={name} />} />
              <Route path='student' element={<Addstudent />} />
              <Route path='teacher' element={<Addteacher />} />
            </Routes>
          </div>
        </div>

      </Router>
    </div>
  )
}

export default App