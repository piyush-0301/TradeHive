import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Education from './Education'
import Pricing from './Pricing'
import OpenAccount from '../OpenAccount'


const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Awards/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
    </div>
  )
}

export default HomePage