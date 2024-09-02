import { useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const RegistrationPage = () => {
    const [registrationdata, setRegistrationdata] = useState({
        username:'',
        password:''
    })

    const handleregistrationdata = (e) => {
        const {name, value} = e.target;
        setRegistrationdata((prevdata) => ({
            ...prevdata,
            [name]:value
        }))
    }

    const handlebothdata = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/registration', registrationdata)
            console.log(response.data)
        } catch (error) {
            console.error('Registration error:', error)
        }

        setRegistrationdata({
            username:'',
            password:''
        })
    }

    return (
        <form onSubmit={handlebothdata}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={registrationdata.username}
                onChange={handleregistrationdata}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={registrationdata.password}
                onChange={handleregistrationdata}
                required
            />
            <button type='submit'>Register</button>
            <p>
                Already Register? <Link to='/login'>Login</Link>
            </p>
        </form>
    )
}

export default RegistrationPage