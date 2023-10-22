import React from 'react'
import { useAuth } from '../AuthcontextApi'
import { useNewcart } from '../cart/DubcartApi'
import { Link } from 'react-router-dom'
import Price from '../pages/Price'

const UserProfille = () => {
    const {user,logOut} = useAuth()
    const {ordergetdata} = useNewcart()
   
    
    const getuser = ordergetdata.filter((e)=> {
      return e?.useremail === user?.email
    })
    
    console.log(getuser,"getuser")


  return (
    <div className='container padding-80 spacing-top'>
       <div className='userprofile'>
         <h1>Profile</h1>
        <div className='user-box'>
         <img src={user?.photoURL} />
        </div>
        <h1>Hi {user?.displayName}</h1>
        <h3>UID : {user?.uid}</h3>
        <h3>Last login at : {user?.reloadUserInfo?.lastLoginAt}</h3>
        <h3>Last refresh at : {user?.reloadUserInfo?.lastRefreshAt}</h3>
        <h3>CreationTime : {user?.metadata?.creationTime}</h3>
        <h3>LastSignInTime : {user?.metadata?.lastSignInTime}</h3>
        <h3>Database : {user?.providerId}</h3>
        <div className='log'>
        <button type="submit" onClick={logOut}><i class="fas fa-sign-out-alt"></i></button>
        </div>
       </div> 
       {getuser.length > 0 ? 
       <div className='container padding-80 order-page'>
      <h1>Your Order List</h1>
      <table>
        <thead>
        <tr>
              <th className='number'>No.</th>
              <th>Name</th>
              <th className='price'>Email</th>
              <th className='cates'>OrderID</th>
              <th className='distock'>Payment Date</th>
              <th className='distock'>Price</th>
              <th className='distock'>-</th>
            </tr>
        </thead>
        <tbody>
        {
          getuser?.map((e,index)=> {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{e?.shippingInfo?.userrname}</td>
                <td>{e?.shippingInfo?.email}</td>
                <td>{e?.idddd}</td>
                <td>{e?.date}</td>
                <td>{<Price price={e?.gettotal}/>}</td>
                <td>
                <Link to={`/orderlist/${e?.idddd}`}><button><i class="fas fa-list"></i></button></Link>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>  : "" }
    </div> 
 
  )
}

export default UserProfille

