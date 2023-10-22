import React,{useState} from 'react'
import { useNewcart } from './DubcartApi'
import Price from '../pages/Price'
import { useEffect } from 'react'
import { db } from '../firebase'
import { addDoc, collection } from '@firebase/firestore'
import Process from '../payment/Process'
import Success from '../payment/Success'
import { useAuth } from '../AuthcontextApi'

const Payment = () => {
  const [cardyour, setcardyour] = useState()
  const [carderror, setcarderror] = useState(false)
  const [expyour, setexpyour] = useState()
  const [experror, setexperror] = useState(false)
  const [successmsg, setsuccessmsg] = useState(true)
  const [paymentchange, setpaymentchange] = useState("entry")
  const {user} = useAuth()
  const { shippingInfo, cartItems, checkout, paymentInfo, setpaymentInfo, gettotal, setCartItems} = useNewcart()
  const { email, userrname, address, city, phonenumber } = shippingInfo
  const { cardnumber, cardname, exp, cvv} = paymentInfo
  let result

  const paymentsubmit = (e) => {
    e.preventDefault()
    console.log(paymentInfo)
    setpaymentchange("process")
  }

 const setyourcard = (e) => {
  if(cardnumber.length < 15){
    setcarderror(true)
    setcardyour("invaild card")
  }else if(cardnumber.length === 15) {
    setcarderror(false)
  }
  else if(cardnumber.length > 15) {
    setcarderror(true)
    setcardyour("invaild card")
  } 
  else {
    setcarderror(false)
  }
  setpaymentInfo({...paymentInfo,cardnumber:e.target.value})
 }


 const yourderxp = (e) => {
  if(!exp?.includes("/20")){
    setexperror(true)
    setexpyour("invaild")
  }else {
    setexperror(false)
  }
  setpaymentInfo({...paymentInfo,exp:e.target.value})
 }
let textid = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpKkURuSrsTtUuVvWwXxYyZz1234567890!@#$%&" 
let idready = ""
let idpayment 
const paymentidgenerate = () => {
for (let index = 0; index < 16; index++) {
  idpayment = Math.floor(Math.random() * textid?.length)  
  idready += textid.charAt(idpayment)
}
return idready
}
let idddd = paymentidgenerate()
console.log(idddd)

const paymentdone = () => {
  paymentidgenerate()
  setpaymentchange("donepayment")
 
  setTimeout(() => {
  setsuccessmsg(false)
   }, 5000)
   const paymentdetailsave = {
    idddd,
    useremail:user?.email,
    shippingInfo,
    paymentInfo,
    cartItems,
    gettotal,
    date:new Date().toLocaleString(
                "en-US",
                {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                }
     )
   }
   
   try {
    result = addDoc(collection(db, "neworders"), paymentdetailsave)
  } catch (error) {
    console.log(error)  
  }
}
 console.log(successmsg)

  return (
    <>
      <div className={successmsg ? "col-md-12" : "col-md-12 paymentdone"}>
          <div>
            <table>
              <tbody>
                {
                  cartItems?.map((e, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td className='photos'><img src={e?.img} /></td>
                        <td><h5 className="card-title">{e?.title?.slice(0, 30)}</h5></td>
                        <td>
                          <div className='count'>
                            {e?.quantity}
                          </div>
                        </td>
                        <td><Price price={e?.price * e?.quantity} /></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

        <div className='pay-shipping'>
          <h1>shipping details</h1>
          <h3>Email : {email}</h3>
          <h3>Name : {userrname}</h3>
          <h3>Address : {city}</h3>
          <h3>phonenumber : {phonenumber}</h3>
        </div>
      </div>
      
      <div className='row payment-info justify-content-center'>
      <h1>Payment details</h1>
        {
          paymentchange === "entry" && 
          <div className="col-6">
          <div className="card mx-auto">
            <form className="card-details ">
              <div className="form-group">
                <p className="text-warning mb-0">Card Number</p>
                <input type="number"  name="card-num" placeholder="xxxx xxxx xxxx xxxx"  id="cno" minLength="16" maxLength="16" onChange={(e)=>setyourcard(e)} />
                {carderror && <span className={!carderror ? "green" : "red"}>{cardyour}</span>}
              </div>

              <div className="form-group">
                <p className="text-warning mb-0">Cardholder's Name</p>
                <input type="text" name="name" placeholder="Name" size="17" onChange={(e)=>setpaymentInfo({...paymentInfo,cardname:e.target.value})} />
              </div>
              <div className="form-group">
                <div className="row d-flex">
                  <div className="col-sm-6">
                    <p className="text-warning mb-0">Expiration</p>
                    <input type="text" name="exp" placeholder="MM/YYYY" size="7" id="exp" minLength="7" maxLength="7" onChange={(e)=>yourderxp(e)} />
                    {experror && <span className={!experror ? "green" : "red"}>{expyour}</span>}
                  </div>
                  <div className="col-sm-6">
                    <p className="text-warning mb-0">Cvv</p>
                    <input type="text" name="cvv" placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" onChange={(e)=>setpaymentInfo({...paymentInfo,cvv:e.target.value})}/>
                  </div>
                  <div className="">
                    { cardnumber && cardname && exp && cvv && !carderror && !experror  ?
                    <button onClick={paymentsubmit} className="btn btn-primary">submit</button> : ""
                    }
                  </div>
                </div>
              </div>
            </form>
          </div>
          </div>
        }
           
       {
         paymentchange === "process" && 
         <div className="card px-4">
          
         <div className="debit-card">
             <div className="d-flex flex-column h-100">
                 <label className="d-block">
                     <div className="d-flex position-relative">
                         <div>
                             <img src="https://www.freepnglogos.com/uploads/visa-inc-logo-png-11.png" className="visa"
                                 alt=""/>
                             <p className="mt-2 mb-4 text-white fw-bold">{cardname}</p>
                         </div>
                     </div>
                 </label>
                 <div className="mt-auto fw-bold d-flex align-items-center justify-content-between security">
                     <p>{cardnumber}</p>
                     <p>{exp}</p>
                 </div>
             </div>
         </div>
        <div className='pay-bot'>
         {/* <button onClick={()=>setpaymentchange("entry")} className="btn btn-primary">back</button> */}
         <button onClick={() => paymentdone() } className="btn mb-4">
             Payment Now ${gettotal}
         </button>
        </div>
         </div>
       }
      

       {
         paymentchange === "donepayment" && 
         <div>
           { successmsg ?  <Process/> : <Success paymentIDD={idddd}/>} 
         </div>
       }
        </div>



    </>

  )
}

export default Payment



// {cartItems.length > 0 ? <button onClick={checkout}>checkout</button> : ""} 