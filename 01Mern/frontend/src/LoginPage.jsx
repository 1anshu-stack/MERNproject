import React, { useState } from "react";
import { Link } from "react-router-dom";
import Registration from "./Registration";
import axios from "axios";

const LoginPage = () => {

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const handleSumbit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('https://turbo-invention-xx7w6v5qqg6h6vjj-8000.app.github.dev/login', loginData);
            const {success, message} = response.data;
            if(success){
                console.log('Login is successfull...')
            }
            else{
                console.log(message);
            }
        }
        catch(error){
            console.error('Login error', error);
        }

        setLoginData({
            username:'',
            password:''
        })
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
           <h1>Login Page:-</h1>
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