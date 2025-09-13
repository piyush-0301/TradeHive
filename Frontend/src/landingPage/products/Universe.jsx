import React from 'react'

const Universe = () => {
  return (
    <div className='container mt-5 pt-5 text-center'>
      <h3 className='mb-5 '>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h3>
      <h2>The Zerodha Universe</h2>
      <h6 className='mt-5'>Extend your trading and investment experience even further with our partner platforms</h6>
      <div className="row mt-5 mb-5 px-5">
        <div className="col">
          <img className='mb-3' style={{width:"50%"}} src="/media/zerodhaFundhouse.png" alt="" /><br/>
          <span className="text-12 text-light-grey">Our asset management venture <br/>that is creating simple and transparent index <br/>funds to help you save for your goals.</span>
        </div>
        <div className="col">
          <img className='mb-4' style={{width:"65%"}} src="/media/sensibullLogo.svg" alt="" /><br/>
          <span className="text-12 text-light-grey sensibull-desc">Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.</span>
        </div>
        <div className="col">
          <img className='mb-3' style={{width:"50%"}} src="/media/goldenpiLogo.png" alt="" /><br/>
          <span className="text-12 text-light-grey">Investment research platform <br/>that offers detailed insights on stocks, <br/>sectors, supply chains, and more.</span>
        </div>
      </div>
      <div className="row mt-5 px-5">
        <div className="col">
          <img className='mb-3' style={{width:"50%"}} src="/media/streakLogo.png" alt="" /><br/>
          <span className="text-12 text-light-grey"> Systematic Trading platform <br/>that allows you to create and backtest <br/>strategies without coding.</span>
        </div>
        <div className="col">
          <img className='mb-4' style={{width:"65%"}} src="/media/smallcaseLogo.png" alt="" /><br/>
          <span className="text-12 text-light-grey sensibull-desc">Thematic investing platform<br/>that helps you to invest in diversified <br/>baskets of stocks on ETFs</span>
        </div>
        <div className="col">
          <img className='mb-3' style={{width:"50%"}} src="/media/dittoLogo.png" alt="" /><br/>
          <span className="text-12 text-light-grey">Personalised advice on life<br/>and health insurance. No spam<br/> and no mis-selling</span>
        </div>
      </div>
      <button style={{backgroundColor:"#387ed1"}} className='btn mt-5 px-3 text-light fs-5 fw-semibold'>Sign Up for Free</button>
    </div>
  )
}

export default Universe