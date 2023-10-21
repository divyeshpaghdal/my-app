import React from 'react'
import { useAuth } from '../AuthcontextApi'
import { useNavigate } from "react-router-dom"
import logo from '../img/logo.png'



const Signin = () => {
    const {setupdateName,updateName,email,setemail,password,setpassword,submitSignIn,submitLogin,photoURL, setphotoURL} = useAuth()
    const navigate = useNavigate();  
    const dummylogin = () => {
          navigate("/")
          setemail("")
          setpassword("")
    }
    return (
        <div className='authscreen'>
        <div className='container'>
            <form>
            <div className='logo-set'>
                <img src={logo}/>
                </div>
                <h1>Sign Page</h1>
            <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" value={updateName}  onChange={(e)=> setupdateName(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address </label>
                    <input type="email" value={email}  onChange={(e)=> setemail(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">PhotoURL</label>
                    <input type="email" value={photoURL}  onChange={(e)=> setphotoURL(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} className="form-control"/>
                </div>
                <p>You have an account ? <span onClick={dummylogin}>Login</span></p>
                <button type="submit" onClick={submitSignIn} className="btnn">Sign in</button>
            </form>
        </div>
        </div>
    )
}

export default Signin