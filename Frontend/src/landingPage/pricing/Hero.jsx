import React from 'react'

const Hero = () => {
  return (
    <div className='container m-5 p-5 text-center'>
      <h1 className='mb-4 text-muted mx-5'>Charges</h1>
      <h3 className='text-muted mb-5 px-5 '>List of All Charges and taxes</h3>
      <div className='row mt-5 pt-5 p-5 '>
        <div className="col mt-5 pt-3 px-5">
          <img style={{width:"85%"}} src="/media/pricing0.svg" alt="" />
          <h4 className='mb-3'>Free equity delivery</h4>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col mt-5 pt-3 px-5">
          <img style={{width:"85%"}} src="/media/intradayTrades.svg" alt="" />
          <h4 className='mb-3'>Intraday and F&O trades</h4>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades..</p>
        </div>
        <div className="col mt-5 pt-3">
          <img style={{width:"85%"}} src="/media/pricingEquity.svg" alt="" />
          <h4 className='mb-3'>Free direct MF</h4>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero