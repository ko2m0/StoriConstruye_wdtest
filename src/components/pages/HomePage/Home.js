import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import Benefits from '../../Benefits'
import Footer from '../Footer/Footer'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'

function Home() {
  return (
    <>
    <HeroSection {...homeObjOne} />
    <Benefits />
    <Pricing />
    <HeroSection {...homeObjTwo} />
    <HeroSection {...homeObjThree} />
    <HeroSection {...homeObjFour} />
    <Footer />
    </>
  )
}

export default Home