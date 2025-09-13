import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const RightSection = ({ title, p, src, btn }) => {
  return (
    <div className='container text-center mt-5 '>
      <div className="row px-5 text-center">
        <div className="col-5 p-5 mt-5 text-start">
          <h2 className='mt-5 px-5 pt-5'>{title}</h2>
          <p className='fs-5 px-5'>{p}</p>
          <div className="row px-5 d-flex gap-2 fs-5">
            <a href="">{btn}  <FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
        </div>
        <div className="col-7">
          <img style={{ width: "95%" }} src={src} alt="" />
        </div>

      </div>
    </div>
  )
}

export default RightSection