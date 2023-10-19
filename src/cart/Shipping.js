import React from 'react'
import { useNewcart } from './DubcartApi'
import Price from '../pages/Price'

const Shipping = () => {
    const { shippingInfo, gettotal, setshippingInfo, bred, setbred,handledis,showdis,getvalue} = useNewcart()

    return (
        <div className='row'>
            <div className='col-md-8'>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" value={shippingInfo.email} onChange={(e) => setshippingInfo({ ...shippingInfo, email: e.target.value })} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" value={shippingInfo.userrname} onChange={(e) => setshippingInfo({ ...shippingInfo, userrname: e.target.value })} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="text" value={shippingInfo.address} onChange={(e) => setshippingInfo({ ...shippingInfo, address: e.target.value })} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">City</label>
                        <input type="text" value={shippingInfo.city} onChange={(e) => setshippingInfo({ ...shippingInfo, city: e.target.value })} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="number" value={shippingInfo.phonenumber} onChange={(e) => setshippingInfo({ ...shippingInfo, phonenumber: e.target.value })} className="form-control" />
                    </div>
                    {shippingInfo.email && shippingInfo.address && shippingInfo.userrname && shippingInfo.phonenumber && shippingInfo.city ?
                        <button onClick={() => setbred("paymentpage")}>payment page</button> : ""}
                </form>
            </div>
            {<div className='col-md-3'>
                <h2>Total : {<Price price={gettotal} />}</h2>
                <h5>Special Discount : {showdis ? getvalue : ""} </h5>
                <button onClick={handledis}>show discount</button>

            </div>}
        </div>
    )
}

export default Shipping