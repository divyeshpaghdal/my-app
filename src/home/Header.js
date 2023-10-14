import React from 'react'
import { useAuth } from '../AuthcontextApi'
import { Link } from 'react-router-dom'
import { useNewcart } from '../cart/DubcartApi'


 const Header = () => {
   const {user,logOut} = useAuth()
   const {getcart} = useNewcart()
   console.log(getcart)
  return (
    <div className='header-menu'>
      <div className='headerbar'>
      <Link to="/home"><h2>Dp STORE</h2></Link>
        <ul className='menu'>
            <Link to="/home"><li>Home</li></Link>
            <Link to="/aboutdetails"><li>About</li></Link>
            <Link to="/category"><li>Category</li></Link>
            <Link to="/upcoming"><li>Upcoming</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <Link to="/admin"><li>User</li></Link>
            <Link to="/pagination"><li>all product</li></Link>
        </ul>
      <div className='user'>
      <h4>Welcome {user?.displayName}</h4>
       <button type="submit" onClick={logOut}>logOut</button>
       <Link to="/cart"><button>cart{getcart > 0 ? getcart : ""}</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Header


  // {user?.email === String(process.env.REACT_APP_USER_ID) ? 
  //   <Link to="/product"><li>Admin Panel</li></Link> : ""  
  // }