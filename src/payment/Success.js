import React from 'react'
import { useNewcart } from '../cart/DubcartApi'

const Success = ({paymentIDD}) => {
 
  return (
   <>
   <div className='sucess-pop'>
    <div class="success-checkmark">
  <div class="check-icon">
    <span class="icon-line line-tip"></span>
    <span class="icon-line line-long"></span>
    <div class="icon-circle"></div>
    <div class="icon-fix"></div>
  </div>
</div>
<h1>payment successful</h1>
<h4>Payment id : {paymentIDD}</h4>
</div>
   </>
  )
}

export default Success