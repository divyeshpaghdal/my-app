import React from 'react'
import Header from './home/Header';
import Banner from './home/Banner';
import LatestProduct from './pages/LatestProduct';
import Filter from './home/Filter';
import Upcoming from './pages/Upcoming';
import Popular from './pages/Popular';
import Shortest from './pages/Shortest';
import Testi from './pages/Testi';
import Abouts from './pages/Abouts';


  const Home = () => {
  
  return (
    <div className='homepage spacing-top'>
      <Banner/>
      <LatestProduct/>
      <Abouts/>
      <Upcoming/>
      <Popular/>
      <Testi/>
      <Shortest/>
    </div>
  )
}

export default Home
