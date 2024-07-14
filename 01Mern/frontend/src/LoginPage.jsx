import React, { useState } from "react";
import { Link } from "react-router-dom";
import Registration from "./Registration";

const LoginPage = () => {

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const handleSumbit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }

    return (
        <> 
           <form onSubmit={handleSumbit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username"
                    value={loginData.username}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password"
                    value={loginData.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
                <p>Not Register ? <Link to="/registration">Register yourself</Link></p>
           </form>
        </>
    )
}

export default LoginPage;