import React from 'react'

const Team = () => {
  return (
    <div className="container ">
      <div className="row text-center">
        <div className="col mt-5">
          <img style={{width:"50%",borderRadius:"50%"}} src="/media/nithinKamath.jpg" alt="" />
          <h4 className='mt-3'>Nithin Kamath</h4>
          <h6 className='text-muted'>Founder,CEO</h6>
        </div>
        <div className="col mt-5 text-start fs-5">
          <h2 className='mb-5'>People</h2>
            <p className='mt-5'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <p className='text-primary'>Homepage / TradingQnA / Twitter</p></p>
        </div>
      </div>
    </div>
  )
}

export default Team