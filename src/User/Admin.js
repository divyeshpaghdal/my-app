import React,{useState} from 'react'
import UserInfo from './UserInfo'
import ProductUser from './ProductUser'
import OrderProduct from './OrderProduct'
import Upproduct from './Upproduct'
import { useAuth } from '../AuthcontextApi'
import { useProduct } from '../ProductApi'

const Admin = () => {
    const [admintab, setadmintab] = useState("user")
    const {user} = useAuth()
    const {totaluser,listcopy} = useProduct()
    console.log(user)
  
  const handlechange = (orderset) => {
    setadmintab(orderset)
  }
  const upcomingitem = listcopy?.filter((e)=> {
    return e.product === "upcomming"
   })
   console.log(upcomingitem)
  return (
    <div className='container padding-80'>
       <div className='user-details'>
           <div className='profile'>
            <img src={user?.photoURL}/>
           </div>
          <h2>Welcome {user?.displayName}</h2>
       </div> 
  
     <div className='admin-data-list'>
        <div className='sub-data'>
            <h4>Total Users</h4>
            <p>{totaluser?.length}</p>
        </div>
        <div className='sub-data'>
            <h4>Total Products</h4>
            <p>{listcopy?.length}</p>
        </div>
        <div className='sub-data'>
            <h4>Upcoming Products</h4>
            <p>{upcomingitem?.length}</p>
        </div>
        <div className='sub-data'>
            <h4>Total Orders</h4>
            <p>-</p>
        </div>
     </div>

    <div className='links'>
        <button className={admintab === "user" ? "active" : ""} onClick={() => handlechange("user")}>User</button>
        <button className={admintab === "product" ? "active" : ""} onClick={() => handlechange("product")}>Product</button>
        <button className={admintab === "upcomingproduct" ? "active" : ""} onClick={() => handlechange("upcomingproduct")}>Upcoming Product</button>
        <button className={admintab === "order" ? "active" : ""} onClick={() => handlechange("order")}>Order</button>
    </div>
    {
      admintab === "user"  && <UserInfo totaluser={totaluser}/>
    }
    {
      admintab === "product" && <ProductUser/>
    }
    {
      admintab === "upcomingproduct" && <Upproduct uppcom={upcomingitem}/>
    }
     {
      admintab === "order" && <OrderProduct/>
    }
    </div>
  )
}

export default Admin