import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Registration = () => {
    const [registrationData, setRegistrationData] = useState({
        username:'',
        password:''
    })

    const handleChange = (e) => {
        console.log(e);
        const {name, value} = e.target;
        setRegistrationData((prevdata) => (
            {
                ...prevdata,
                [name]:value
            }
        ))
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('https://turbo-invention-xx7w6v5qqg6h6vjj-5173.app.github.dev/registration', registrationData);
            console.log(response);
        }
        catch(error){
            console.log(error);
        }
        setRegistrationData({
            username:'',
            password:''
        })
    }

    return (
        <> 
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username"
                    value={registrationData.username}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="text" 
                    name="password" 
                    placeholder="password"
                    value={registrationData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
            <p>Alredy Register ? <Link to='/login'>Login here</Link></p>
        </>
    )
}

export default Registration;