import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const LeftSection = ({ src, title, p, tryDemo, learnMore, coin }) => {
  return (
    <div className='container text-center mt-5 '>
      <div className="row px-5 text-center">
        <div className="col-7 ">
          <img style={{ width: "85%" }} src={src} alt="" />
        </div>
        <div className="col-5 px-5 mt-5 text-start">
          <h2 className='px-5 py-2'>{title}</h2>
          <p className='fs-5 px-5'>{p}</p>
          <div className="row px-5 d-flex gap-2 fs-5">
            <a  href=""> {tryDemo ? <>{tryDemo} <FontAwesomeIcon icon={faArrowRight} /></> : ""} </a>
            <a href=""> {learnMore ? <>{learnMore}<FontAwesomeIcon icon={faArrowRight} /></> : ""} </a>
            <a href=""> {coin ? <>{coin} <FontAwesomeIcon icon={faArrowRight} /></> : ""} </a>
          </div>
          <div className="row px-5 py-3">
            <div className="col ">
              <img src="/media/googlePlayBadge.svg" alt="" />
            </div>
            <div className="col">
              <img src="/media/appstoreBadge.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection