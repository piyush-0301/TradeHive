import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div style={{backgroundColor:"#387ed1"}} className=" p-5  text-light">
      <div className="container row px-5 mx-5 mt-5">
        <div className="col-7 mb-5">
          <h4 className='mb-5'>Support Portal</h4>
          <h4 className='mb-5'>Search for an answer or browse help topics to create a ticket</h4>
          <input className='p-3 rounded' style={{ width: "80%" }} type="text" placeholder='Eg: how do i activate F&O,why is my order getting rejected...'/><br/>
          <p className='inline-block fs-5 mt-3' ><a href=""className='text-light'>Track account opening</a></p>
          <p className='inline-block fs-5'><a href=""className='text-light'>Track segment activation</a></p>
          <p className='inline-block fs-5'><a href=""className='text-light'>Intraday margins</a></p>
          <p className='inline-block fs-5'><a href=""className='text-light'>Kite user manual</a></p>

        </div>
        <div className="col-5">
          <h5 className='d-flex justify-content-end text-decoration-underline'>Track Tickets</h5>
          <div>
            <h4 className='mt-5 pt-5'>Featured</h4>
            <p className=' mt-5 fs-5'>1.<a className='text-light' href="">MCX Crude option contract expiry - June 2025</a></p>
            <p className='fs-5'>2.<a className='text-light' href="">Latest Intraday leverages and Square-off timings</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero