import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
      <div className="row text-center ">
        <img className='mb-5' src="/media/homeHero.png" alt="Hero" style={{width:"100%"}} />
        <h1 className='mt-3' >Invest In EveryThing</h1>
        <p>Online Platform To Invest In Stocks, derivatives, mutual funds, ETfs, bonds and more.</p>
        <button style={{width:"20%"}} className='btn btn-primary p-2 fs-5 rounded m-auto'>Signup Now</button>
      </div>
    </div>
  )
}

export default Hero