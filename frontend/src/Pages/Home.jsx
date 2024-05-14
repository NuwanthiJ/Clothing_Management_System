import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import PopularMen from '../Components/PopularMen/PopularMen'
import NewCollections from '../Components/NewCollections/NewCollections'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';


const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Popular/> 
      <Offers/>
      <PopularMen/>
      <NewCollections/>
      <Footer/>
    </div>
  )
}

export default Home
