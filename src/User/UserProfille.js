import React from 'react'
import { useAuth } from '../AuthcontextApi'

const UserProfille = () => {
    const {user,logOut} = useAuth()
    console.log(user)
  return (
    <div className='container padding-80 spacing-top'>
       <div className='userprofile'>
        <div className='user-box'>
         <img src={user?.photoURL} />
        </div>
        <h1>UserName : {user?.displayName}</h1>
        <h3>UID : {user?.uid}</h3>
        <h3>Last login at : {user?.reloadUserInfo?.lastLoginAt}</h3>
        <h3>Last refresh at : {user?.reloadUserInfo?.lastRefreshAt}</h3>
        <h3>CreationTime : {user?.metadata?.creationTime}</h3>
        <h3>LastSignInTime : {user?.metadata?.lastSignInTime}</h3>
        <h3>Database : {user?.providerId}</h3>
         <button type="submit" onClick={logOut}><i class="fas fa-sign-out-alt"></i></button>
       </div>  
    </div>
  )
}

export default UserProfille

