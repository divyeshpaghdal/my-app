import React,{useState} from 'react'
import { useNewcart } from './DubcartApi'
import Price from '../pages/Price'

const Shipping = () => {
    const [emailerror, setemailerror] = useState(false)
    const [usernameerror, setusernameerror] = useState(false)
    const [cityerror, setcityerror] = useState(false)
    const [numbererror, setnumbererror] = useState(false)
    const [erroremailmsg, setemailerrormsg] = useState()
    const [errornamemsg, setnameerrormsg] = useState()
    const [errorcitymsg, setcityerrormsg] = useState()
    const [errornumbermsg, seterrornumbermsg] = useState()
    const { shippingInfo, gettotal, setshippingInfo, bred, setbred,handledis,showdis,getvalue} = useNewcart()
    const {email,userrname,city,phonenumber} = shippingInfo
    const tax = 23;
    const shippingcharge = 40
    const setemail = (e) => {
            if(email === ""){
                setemailerror(true)
                setemailerrormsg("Add your valid email")
            }else if(!email?.includes("@gmail.co")) {
                setemailerror(true)
                setemailerrormsg("email not found")
            }else {
                setemailerror(false)
                
            }
          setshippingInfo({ ...shippingInfo, email: e.target.value })
        }

    const setyourname = (e) => {
        if(userrname === ""){
            setusernameerror(true)
            setnameerrormsg("Add your valid Username")
        }else if(userrname.length < 6) {
            setusernameerror(true)
            setnameerrormsg("Username  more than 6 charter")
        }else {
            setusernameerror(false)
        }
        setshippingInfo({ ...shippingInfo, userrname: e.target.value})
    }

    const setyourcity = (e) => {
        if(city === ""){
            setcityerror(true)
            setcityerrormsg("Add your valid City")
        }else if(city.length < 3) {
            setcityerror(true)
            setcityerrormsg("City more than 3 charter")
        }else {
            setcityerror(false)
        }
        setshippingInfo({ ...shippingInfo, city:e.target.value})
    }

    const setyournumber = (e) => {
        if(phonenumber === ""){
            setnumbererror(true)
            seterrornumbermsg("Add your valid email")
        }else if(!phonenumber?.includes("98765")) {
            setnumbererror(true)
            seterrornumbermsg("Your number start 98765")
        }else if(phonenumber.length > 9) {
            setnumbererror(true)
            seterrornumbermsg("invalid numer")
        }else {
            setnumbererror(false)
            
        }
      setshippingInfo({ ...shippingInfo, phonenumber:e.target.value })
    }
  
    return  (
        <div className='row'>
            <div className='col-md-8'>
                <form className='shipping-form'>
         
                        <div className="mb-3 col-12" id='#email'>
                            <label className="form-label">Email</label>
                            <input className={!emailerror ? "green form-control" : "red form-control"}   type="email" value={shippingInfo.email} onChange={(e) => setemail(e)}/>
                            {emailerror && <span>{erroremailmsg}</span>}
                        </div>


                    <div className="mb-3 col-12" id='#name'>
                        <label className="form-label">Name</label>
                        <input className={!usernameerror ? "green form-control" : "red form-control"} type="text" value={shippingInfo.userrname} onChange={(e) => setyourname(e)}/>
                        {usernameerror && <span>{errornamemsg}</span>}
                    </div>


                    <div className="mb-3 col-12"  id='#city'>
                        <label className="form-label">City</label>
                        <input className={!cityerror ? "green form-control" : "red form-control"} type="text" value={shippingInfo.city} onChange={(e) => setyourcity(e)}/>
                        {cityerror && <span>{errorcitymsg}</span>}
                    </div>
                
                    <div className="col-12" id='#email'>
                            <label className="form-label">Phone Number</label>
                            <input className={!numbererror ? "green form-control" : "red form-control"}   type="number" value={shippingInfo.phonenumber} onChange={(e) => setyournumber(e)}/>
                            {numbererror && <span>{errornumbermsg}</span>}
                        </div>
                </form>
            </div>
            <div className='col-md-4 summery'>
                 <h1>Order Summery</h1>   
                 <div className='sum-box'>
                 <h2>SubTotal : {<Price price={gettotal} />}</h2>
                 <h2>Tax : {tax}</h2>
                 <h2>Shipping  : {shippingcharge}</h2>
                 <h2>Special Discount : {getvalue} </h2>
                 </div>
                 <h1>Total : <Price price={gettotal - getvalue - shippingcharge - tax }/></h1>   
            </div>
             <div className='ships-btn'>
             <button onClick={() => setbred("cartpage") }>cart</button>        
            {email && userrname && phonenumber.length === 10 && city ?
                    <button onClick={() => setbred("paymentpage")}>payment page</button> : ""}
             </div>
           
        </div>
    )
}

export default Shipping