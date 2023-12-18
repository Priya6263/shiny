import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"


const SignUp = ()=>{
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const navigate = useNavigate();



    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    }, [])


    let collectData = async ()=>{
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
        if(result){
            navigate('/');

        }
    }
    

    return(
        <div className="Register">
            <h1>Register</h1>
            <input className="inputBox" value={name} type="text" onChange={(e)=>{
               setname(e.target.value)
            }} placeholder="Enter name" />
            <input className="inputBox" value={email} onChange={(e)=>{
               setemail(e.target.value)
            }} type="email" placeholder="Enter email" />
            <input className="inputBox" value={password} onChange={(e)=>{
               setpassword(e.target.value)
            }} type="password" placeholder="Enter password" />

            <button className="btn" onClick={collectData} type="submit">SUBMIT</button>
        </div>
    )
}
export default SignUp;