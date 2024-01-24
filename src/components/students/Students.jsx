import React, { useEffect, useState } from 'react'
import './Students.scss'
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


  return (
    <div className='students'>
      <div className='searchandfilter'>
        <select name="select" id="select">
          <option value="all">All</option>
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
        {students.map((student) => (
          <div key={student.id} className="result">
            <div className='text'>
              <h3>Student  {student.id}</h3>
              <h3>{student.name}</h3>
              <h3>{student.surname}</h3>
              <h3>{student.group}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Studensts