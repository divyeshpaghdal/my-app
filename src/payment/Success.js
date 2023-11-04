import React from 'react'
import { useNewcart } from '../cart/DubcartApi'
import { useNavigate } from 'react-router'

const Success = ({paymentIDD}) => {
const {setCartItems} = useNewcart()
const navigate = useNavigate()

const handlehome = () => {
  window.location.reload(false);
  console.log("home")
  setCartItems([])
  navigate("/home")
 }

  return (
   <>
   <div className='sucess-pop'>
    <div className="success-checkmark">
    <div className="check-icon">
    <span className="icon-line line-tip"></span>
    <span className="icon-line line-long"></span>
    <div className="icon-circle"></div>
    <div className="icon-fix"></div>
  </div>
</div>
<h1>payment successful</h1>
<h4>Payment id : {paymentIDD}</h4>
<button onClick={handlehome}>Home page</button>
</div>
   </>
  )
}

export default Success