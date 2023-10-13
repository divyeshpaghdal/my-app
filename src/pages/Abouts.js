import React from 'react'
import { Link } from 'react-router-dom'

const Abouts = () => {
  return (
    <div className='container'>
       <div className='row about-home'>
          <div className='col-md-6'>
             <div className='about'>
                <img src='https://global-uploads.webflow.com/605826c62e8de87de744596e/6298a47ea4994391af931c1d_heartroasters1.jpg' />
             </div>
          </div>
          <div className='col-md-6'>
             <div className='about-content'>
                <h2 className='title'>About Us</h2>
                <p>Back in the day, when most commerce was about legacy companies and their well-rounded reputation, shoppers needed less assurance. But now the game has entirely changed. eCommerce is booming. </p>
                <p>In this scenario, it has become even more relevant to talk about the origins of your company - where, why, who, how. Remember we were talking about trust earlier? A glimpse into your company/brand’s history will create a sense of transparency, making it easier for shoppers to lean in.</p>
                <Link to="/aboutdetails"><button>Read More</button></Link>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Abouts