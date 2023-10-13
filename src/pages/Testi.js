import React from 'react'
import { TiLinkOutline, TiPiOutline, TiPointOfInterest, TiPowerOutline} from "react-icons/ti";

const Testi = () => {
  return (
    <div className='testi'>
        <div className='container padding-80'>
         <h3 className='title'>Why shop with us ?</h3>
        <div className='list'>
          <div className='sublist'>
             <TiLinkOutline/>
             <h5>Free  Shipping On First Order</h5>
             <p>Learn More</p>
          </div>
          <div className='sublist'>
            <TiPiOutline/>
             <h5>Weekly Flash Sale</h5>
             <p>Learn More</p>
          </div>
          <div className='sublist'>
            <TiPointOfInterest/>
             <h5>Anual Payment Discount</h5>
             <p>Learn More</p>
          </div>
          <div className='sublist'>
            <TiPowerOutline/>
             <h5>Cashback Reward Program</h5>
             <p>Learn More</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Testi