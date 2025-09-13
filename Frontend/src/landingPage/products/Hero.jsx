import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className='container text-center mt-5 py-3'>
      <h1 className='mt-4 text-muted'>Zerodha Products</h1>
      <h4 className='mt-4 mb-3 text-muted'>Sleek, modern, and intuitive trading platforms</h4>
      <span className='inline fs-5  py-5 text-muted'>Check Out our <span className='inline text-primary'>investment offerings <FontAwesomeIcon icon={faArrowRight} /></span></span>
      <hr className='mt-5'/>
    </div>
  )
}

export default Hero