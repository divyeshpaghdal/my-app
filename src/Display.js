import React from 'react'
import App from './App'
import AuthScreen from './AuthScreen'
import { useAuth } from './AuthcontextApi'

const Display = () => {
    const {user} = useAuth()
    console.log(user?.displayName)
  return (
    <>
    {!user?.displayName ?  <AuthScreen/> :  <App/> }
    </>
  )
}

export default Display