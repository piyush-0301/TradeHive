import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  return (
    <div className='container mt-5 py-5'>
      <div className="row">
        <div className="col-lg-6 col-12">
          <img src="/media/education.svg" alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 mt-5">
          <h2>Free and open market education</h2>
          <p className='mt-3 fs-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <span className='text-primary fw-semibold'>Varsity  <FontAwesomeIcon icon={faArrowRight} /></span>
          <p className='mt-3 fs-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <span className='text-primary fw-semibold'>Trading Q&A  <FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
      </div>
    </div>
  )
}

export default Education