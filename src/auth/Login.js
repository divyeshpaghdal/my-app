import React, { useRef } from 'react'
import { useAuth } from '../AuthcontextApi'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const {user,email,setemail,password,setpassword,submitLogin,submitSignIn} = useAuth()
    console.log(user)
    const navigate = useNavigate();  
    const dummysignin = () => {
          navigate("/signin")
          setemail("")
          setpassword("")
    }
    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address </label>
                    <input type="email" value={email}  onChange={(e)=> setemail(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} className="form-control"/>
                </div>
                <button className = {email && password ? "active btn btn-primary" : "btn btn-primary non-active"} type="submit" onClick={submitLogin}>Login</button>
                <button type="submit" onClick={dummysignin} className="btn btn-primary mx-2">Sign in</button>
            </form>
        </div>
    )
}

export default Login