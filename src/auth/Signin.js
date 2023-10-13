import React from 'react'
import { useAuth } from '../AuthcontextApi'
import { useNavigate } from "react-router-dom"


const Signin = () => {
    const {setupdateName,updateName,email,setemail,password,setpassword,submitSignIn,submitLogin,photoURL, setphotoURL} = useAuth()
    const navigate = useNavigate();  
    const dummylogin = () => {
          navigate("/")
          setemail("")
          setpassword("")
    }
    return (
        <div className='container'>
            <form>
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
                <button type="submit" onClick={submitSignIn} className="btn btn-primary">Sign in</button>
                <button type="submit" onClick={dummylogin} className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Signin