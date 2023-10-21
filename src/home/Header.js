import React from 'react'
import { useAuth } from '../AuthcontextApi'
import { Link } from 'react-router-dom'
import { useNewcart } from '../cart/DubcartApi'
import { useProduct } from '../ProductApi'
import logo from '../img/logo.png'

 const Header = () => {
   const {user} = useAuth()
   const {getcart} = useNewcart()
   const {setsearchfilter} = useProduct()

   const changefilterquery = () => {
    setsearchfilter(true)
   }

  return (
    <div className='header-menu'>
      <div className='headerbar'>
      <Link to="/home">
        <div className='logo-home'>
          <img src={logo} />
        </div>
      </Link>
        <ul className='menu'>
            <Link to="/home"><li>Home</li></Link>
            <Link to="/aboutdetails"><li>About</li></Link>
            <Link to="/category"><li>Category</li></Link>
            <Link to="/upcoming"><li>Upcoming</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            {/* <Link to="/admin"><li>Admin Panel</li></Link> */}
        </ul>
      <div className='user'>
     <span onClick={changefilterquery}><i class="fas fa-search"></i></span>
      <Link to="/userprofile"><h4><i class="fas fa-user"></i></h4></Link>
      <Link to="/cart"><p className='cartbtn'><i class="fas fa-cart-plus"></i>{getcart > 0 ? <span>{getcart}</span> : ""}</p></Link>
        </div>
        </div>
    </div>
  )
}

export default Header


  // {user?.email === String(process.env.REACT_APP_USER_ID) ? 
  //   <Link to="/product"><li>Admin Panel</li></Link> : ""  
  // }

  // <Link to="/userprofile"><h4><i class="fas fa-user"></i>Welcome {user?.displayName}</h4></Link>