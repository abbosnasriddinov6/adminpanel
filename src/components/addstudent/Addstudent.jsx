import React, { useState } from 'react'
import './Addstudent.scss'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Addstudent = () => {
  const [adstudent, setAdstudent] = useState ([{
    name: '',
    surname:'',
    group:''
  }])

  const addStudentF = async () => {
    try {
      const str = await axios.post(`http://localhost:3000/studenst`, adstudent)
      setAdstudent(str)
      console.log(ad);
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className='addstudent'>
      <div className='adding'>
        <h1>Please add a student !!!</h1>
        <div>
          <h3>Name</h3>
          <br />
          <input onChange={(e) => setAdstudent({ ...adstudent, name:e.target.value }) } type="text" placeholder='Name. . .' />
        </div>
        <div>
          <h3>Surname</h3>
          <br />
          <input onChange={(e) => setAdstudent({ ...adstudent, surname: e.target.value })} type="text" placeholder='Surname. . .' />
        </div>
        <div>
          <h3>Group</h3>
          <br />
          <input onChange={(e) => setAdstudent({ ...adstudent, group: e.target.value })} type="text" placeholder='Group. . .' />
        </div>
        <NavLink to='/students'><button onClick={addStudentF}>Add</button></NavLink>
      </div>
    </div>
  )
}

export default Addstudent