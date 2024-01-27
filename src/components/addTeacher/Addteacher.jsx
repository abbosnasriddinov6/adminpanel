import React, { useState } from 'react'
import './Addteacher.scss'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Addteacher = () => {
    const [adteacher, setTeacher] = useState([{
        name: '',
        surname: '',
        group: ''
    }])

    const addTeachersF = async () => {
        try {
            const str = await axios.post(`http://localhost:3000/teachers`, adteacher)
            setTeacher(str)
            console.log(ad);
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div className='addstudent'>
            <div className='adding'>
                <h1>Please add a teacher !!!</h1>
                <div>
                    <h3>Name</h3>
                    <br />
                    <input onChange={(e) => setTeacher({ ...adteacher, name: e.target.value })} type="text" placeholder='Name. . .' />
                </div>
                <div>
                    <h3>Surname</h3>
                    <br />
                    <input onChange={(e) => setTeacher({ ...adteacher, surname: e.target.value })} type="text" placeholder='Surname. . .' />
                </div>
                <div>
                    <h3>Group</h3>
                    <br />
                    <input onChange={(e) => setTeacher({ ...adteacher, group: e.target.value })} type="text" placeholder='Group. . .' />
                </div>
                <NavLink to='/teachers'><button onClick={addTeachersF}>Add</button></NavLink>
            </div>
        </div>
    )
}

export default Addteacher