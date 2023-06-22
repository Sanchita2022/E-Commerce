import React from 'react'
import NavHome from "../Component/NavHome"
import HeroHome from '../Component/HeroHome'
import HomeCards from '../Component/HomeCards'

const Home = () => {
  return (
    <div className='padding' style={{
  background: "linear-gradient(104.58deg, #FFDCF3 2.1%, #D7FFFF 100.64%)"

    }}>
    <NavHome/>
    <HeroHome/>
    <HomeCards/>
    </div>
  )
}

export default Home
