import React, { useEffect, useState } from 'react'
import './Teachers.scss'

const Teachers = () => {
  const [teachers, setTeachers] = useState([])

  const fetchTeacher = async () => {
    try {
      const str = await fetch(`http://localhost:3000/teachers`)
      const st = await str.json();
      setTeachers(st)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTeacher();
  }, [])

 

  return (
    
    <>
      <div className='teachers'>
        <div className='searchandfilter'>
          <select name="select" id="select" >
            <option value="All">All</option>
            <option value="Ielts Foundation">Ielts Foundation</option>
            <option value="General English">General English</option>
          </select>
          
          <input type="text" placeholder='Search . . .' />
        </div>
        <div className='data'>
          <h2>Id</h2>
          <h2>Name</h2>
          <h2>Surname</h2>
          <h2>Goup</h2>
        </div>
        <div className='info'>
          {teachers.map((teacher) => (
            <div key={teacher.id} className="result">
              <div className='text'>
                <h3>Teacher   {teacher.id}</h3>
                <h3>{teacher.name}</h3>
                <h3>{teacher.surname}</h3>
                <h3>{teacher.group}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    
  )
}

export default Teachers