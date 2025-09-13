import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Awards = () => {
  return (
    <div className='container mt-5 py-5'>
      <div className="row">
        <div className="col-lg-5 col-sm-12">
          <h2 className='fs-2'>Trust With Confidence</h2><br />
          <h3 className='fs-4'>Customer Always First</h3>
          <p className='fs-5 mb-4 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          <h3 className='fs-4'>No spam and Gimmicks</h3>
          <p className='fs-5 mb-4 text-muted'>
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. </p>
          <h3 className='fs-4'>The Zerodha Universe</h3>
          <p className='fs-5 mb-4 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h3 className='fs-4'>Do Better With Money</h3>
          <p className='fs-5 mb-4 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-lg-7 col-sm-12 text-center">
          <img src="/media/ecosystem.png" alt="ecosystem"  style={{width:"85%"}}/>
          <span className='inline text-primary fs-5 p-5'>Explore Our Products <FontAwesomeIcon icon={faArrowRight} /></span>
          <span className='inline text-primary fs-5'>Try Kite Editor <FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
          <img className='m-auto mt-5 py-5' src="/media/pressLogos.png" alt="" style={{width:"65%"}} />
      </div>
    </div>
  )
}

export default Awards