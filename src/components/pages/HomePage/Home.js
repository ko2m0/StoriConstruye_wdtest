import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import Benefits from '../../Benefits'
import Footer from '../Footer/Footer'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'
import TitleText from '../../TitleText'
import Vdo from '../../Vdo'
import Clients from '../../Clients'
import Steps from '../../Steps'
import Requirements from '../../Requirements'
import Intro from '../../Intro'

function Home() {
  return (
    <>
    <Intro />
    <Benefits />
    <HeroSection {...homeObjOne} />
    <Vdo />
    
    <Pricing />
    <TitleText />
    <HeroSection {...homeObjTwo} />
    <Requirements />
    <HeroSection {...homeObjFour} />
    <Clients />
    <Steps />
    <Footer />
    </>
  )
}

export default Home