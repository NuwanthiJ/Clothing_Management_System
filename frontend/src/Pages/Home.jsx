import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import PopularMen from '../Components/PopularMen/PopularMen'
import NewCollections from '../Components/NewCollections/NewCollections'



const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/> 
      <Offers/>
      <PopularMen/>
      <NewCollections/>
    </div>
  )
}

export default Home
