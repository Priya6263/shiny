import React, { useState } from "react"
import { Link,useNavigate } from "react-router-dom"

const Nav = () => {

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup');
    }

    return(
        <div>
            <img
            className="logo"
            alt="logo"
            src="https://blog.tubikstudio.com/wp-content/uploads/2019/01/appshack-logo_design_case_study_tubik_icon-1024x768.png"
            />
           {
            auth?

            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                {/* <li>{ 
                auth? <Link onClick={logout} to="/signup">Logout</Link> : 
                <Link to="/signup">Sign up</Link>
                }</li> 
                <li><Link to="/login">Login</Link></li> */}
            </ul>
            :
            <ul className="nav-ul nav-right">
                <li><Link to="/signup">Sign up</Link></li> 
                <li><Link to="/login">Login</Link></li>
            </ul>

}
        </div>
    )
}
export default Nav;