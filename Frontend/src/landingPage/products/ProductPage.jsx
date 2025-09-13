import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection'
import RightSection from "./RightSection";
import Universe from './Universe';

const ProductPage = () => {
  return (
    <>
    <Hero/>
    <LeftSection coin={""} learnMore={"Learn More"} tryDemo={"Try Demo"} src={"/media/kite.png"} title={"Kite"} p={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}/>
    <RightSection btn={"Learn More"} src={"/media/console.png"} title={"Console"} p={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}/>
    <LeftSection coin={"Coin"} learnMore={""} tryDemo={""} src={"/media/coin.png"} title={"Coin"} p={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."}/>
    <RightSection btn={"Kite-Connect"} src={"/media/kiteconnect.png"} title={"Kite-Connect API"} p={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}/>
    <LeftSection coin={""} learnMore={""} tryDemo={""} src={"/media/coin.png"} title={"Varsity mobile"} p={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}/>
    <Universe/>
    </>
  )
}

export default ProductPage