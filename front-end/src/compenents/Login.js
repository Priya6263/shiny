import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let Login = ()=>{
const navigate = useNavigate();
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
        navigate('/');
    }
}, [])


const handleLogin = async ()=>{

    let result = await fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    result = await result.json();
    
    if(result.auth){
       localStorage.setItem("user",JSON.stringify(result.user));
       localStorage.setItem("token",JSON.stringify(result.auth));
       navigate("/");
    }
    else{
        notify();
        //alert("no user found")
    }
}
const notify = () => toast.error('No user found!', {
    position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
    });


    return(
        <div className="login">
            <h1>Login</h1>
            <input type="text" className="inputBox" placeholder="enter email" 
            onChange={(e)=>{
                setEmail(e.target.value)
            }} value={email}
            />
            <input type="password" className="inputBox" placeholder="enter password" 
             onChange={(e)=>{
                setPassword(e.target.value)
            }} value={password}
            />
            <button className="btn" onClick={handleLogin} type="submit">LOGIN</button>
            <ToastContainer />
        </div>
    )
}
export default Login;