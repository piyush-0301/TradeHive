import React from 'react'
import { useState } from 'react';
import axios from "axios"

const Login = () => {
    let [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    let handleChange=(e)=>{
        let fieldName=e.target.name;
        let fieldValue=e.target.value;
        formData[fieldName]=fieldValue;
        setFormData(formData);
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
        axios.post("http://localhost:3000/login",formData)
        .then((res)=>{console.log(res)})
        .catch(err=>console.log(err));
    }
    return (
        <div className='container text-center mt-5'>
            <h1 className='mb-5'>Login</h1>
            <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center' action="">
                <input onChange={handleChange} name='username' className='mb-3 text-center w-50' type="text" placeholder='Enter Username' />
                <input onChange={handleChange} name='password' className='mb-3 text-center w-50' type="password" placeholder='Enter Password' />
                <button className='w-25'>Log In</button>
            </form>
        </div>
    )
}

export default Login