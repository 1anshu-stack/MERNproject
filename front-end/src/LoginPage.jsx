import { useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const LoginPage = () => {
    const [logindata, setLogindata] = useState({
        username:'',
        password:''
    })

    const handlelogindata = (e) => {
        const {name, value} = e.target;
        setLogindata((prevdata) => ({
            ...prevdata,
            [name]:value
        }))
    }

    const handlebothdata = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login', logindata)
            console.log("response:-",response);
            console.log("responseDATA:-",response.data);
            const {success, message} = response.data;
            if(success){
                console.log('login successfully')
            }
            else{
                console.log(message)
            }
        } catch (error) {
            console.error('Login error:', error)
        }

        setLogindata({
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
                value={logindata.username}
                onChange={handlelogindata}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={logindata.password}
                onChange={handlelogindata}
                required
            />
            <button type='submit'>Login</button>
            <p>
                Not registered yet? <Link to='/registration'>Registeration</Link>
            </p>
        </form>
    )
}

export default LoginPage;