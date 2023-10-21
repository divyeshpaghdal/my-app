import React, { useRef } from 'react'
import { useAuth } from '../AuthcontextApi'
import { useNavigate } from "react-router-dom";
import logo from '../img/logo.png'

const Login = () => {
    const {user,email,setemail,password,setpassword,submitLogin} = useAuth()
    console.log(user)
    const navigate = useNavigate();  
    const dummysignin = () => {
          navigate("/signin")
          setemail("")
          setpassword("")
    }
    return (
        <>
       <div className='authscreen'>
        <div className='container'>
            <form>
                <div className='logo-set'>
                <img src={logo}/>
                </div>
                <h1>Login Page</h1>
                <div className="mb-3">
                    <label className="form-label">Email address </label>
                    <input type="email" value={email}  onChange={(e)=> setemail(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} className="form-control"/>
                </div>
                <p>Don't have an account ? <span onClick={dummysignin}>Sign in</span></p>
                <button className='btnn' type="submit" onClick={submitLogin}>Login</button>
            </form> 
        </div>
        </div> 
        </>
    )
}

export default Login

// className = {email && password ? "active btnn" : "btnn non-active"}