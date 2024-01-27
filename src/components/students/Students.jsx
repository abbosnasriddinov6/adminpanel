import React, { useEffect, useState } from 'react'
import './Students.scss'
import { deletee, edit } from '../../assets'
import 'axios'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Studensts = () => {



  const [students, setStudents] = useState([])

  const fetchStudents = async () => {
    try {
      const str = await fetch(`http://localhost:3000/studenst`)
      const st = await str.json();
      setStudents(st)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, [])

  const deleteFunction = (id) => {
    if (confirm("Are you sure !!! do you want to delete ? ")) {
      try {
        axios.delete(`http://localhost:3000/studenst/${id}`)
        fetchStudents();
      } catch (error) {
        console.log(error);
      }
    }
  }



  return (
    <div className='students'>
      <div className='searchandfilter'>
        <select name="select" id="select">
          <option value="all">All</option>
          <option value="Ielts Foundation">Ielts Foundation</option>
          <option value="General English">General English</option>
        </select>
        <input  type="text" placeholder='Search . . .' />
       
      </div>
      <div className='data'>
        <h2>Id</h2>
        <h2>Name</h2>
        <h2>Surname</h2>
        <h2>Goup</h2>
      </div>
      <div className='info'>
        {students.map((student, index) => (
          <div key={index.id} className="result">
            <div className='text'>
              <h3>Student  {student.id}</h3>
              <h3>{student.name}</h3>
              <h3>{student.surname}</h3>
              <h3>{student.group}</h3>
              <div className='editanddelete'>
                <button><img src={edit} alt="chiq" /></button>
                <button onClick={() => deleteFunction(student.id)}><img src={deletee} alt="chiq" /></button>
              </div>
            </div>

          </div>
        ))}
      </div>
      <div className='add'>
        <NavLink to='/student'><button>Add student</button></NavLink>
      </div>
    </div>
  )
}

export default Studensts