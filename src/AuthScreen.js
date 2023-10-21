import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './auth/Login';
import Signin from './auth/Signin';
import ErrorPage from './home/ErrorPage';
import { ToastContainer } from 'react-toastify';


const AuthScreen = () => {
  return (
    <>
      <Routes>
      <Route>
        <Route path="/" element={ <Login/>}/> 
        <Route path="/signin" element={<Signin/>}/> 
        <Route path="*" element={<ErrorPage/>} /> 
      </Route>
    </Routes>
    <ToastContainer
      position="top-right"
      autoClose={1000}
      />
    </>
  )
}

export default AuthScreen