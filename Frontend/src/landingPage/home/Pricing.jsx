import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  return (
    <div className='container mt-5 py-5'>
      <div className="row">
        <div className="col-6">
          <h2>Unbeatable Pricing</h2>
          <p className='fs-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <span className='text-primary fw-semibold fs-5'>See Pricing <FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
        <div className="col flex">
          <img className='inline' style={{width:"75%"}} src="/media/pricing0.svg" alt="" />
          <p  className='fw-light inline'>Free Account <br />Opening</p>
        </div>
        <div className='col'>
          <img style={{width:"75%"}} src="/media/pricingEquity.svg" alt="" />
          <p className='fw-light'>Free equity delivery and direct mutual funds</p>
        </div>
        <div className='col'>
          <img style={{width:"75%"}} src="/media/intradayTrades.svg" alt="" />
          <p className='fw-light'>Intraday and F/O</p>
        </div>
      </div>

    </div>
  )
}

export default Pricing