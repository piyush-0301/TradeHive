import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle, faCoins, faUser, faChartSimple, faWallet, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const CreateTicket = () => {
  return (
    <div className='container mt-5 px-5'>
      <h4 className='text-muted'>To create a Ticket, select a relvent topic</h4>
      <div className="row mt-5">
        <div className="col">
          <div className='d-flex gap-3 align-items-center'>
            <FontAwesomeIcon className='fs-5' icon={faPlusCircle} />
            <h4 >Account Opening</h4>
          </div>
          <ul className='list-unstyled px-4'>
            <li><a href="">Resident indiviual</a></li>
            <li><a href="">Minor</a></li>
            <li><a href="">Non-Resident Indian(NRI)</a></li>
            <li><a href="">Company, Partnership, HUF and LLP</a></li>
            <li><a href="">Glossary</a></li>
          </ul>
        </div>
        <div className="col">
          <div className='d-flex gap-3 align-items-center'>
            <FontAwesomeIcon className='fs-5' icon={faUser} />
            <h4>Your Zerodha Account</h4>

          </div>
          <ul className='list-unstyled px-4'>
            <li><a href="">Your Profile</a></li>
            <li><a href="">Account Modification</a></li>
            <li><a href="">Client Master Report (CMR) and Depository Participant (DP)</a></li>
            <li><a href="">Nomination</a></li>
            <li><a href="">Transfer and conversion of securities</a></li>
          </ul>
        </div>
        <div className="col">
          <div className="d-flex gap-3 align-items-center">
            <FontAwesomeIcon className='fs-5'icon={faChartSimple} />
            <h4>Kite</h4>

          </div>
          <ul className='list-unstyled px-4'>
            <li><a href="">IPO</a></li>
            <li><a href="">Trading FAQs</a></li>
            <li><a href="">Margin Trading Facility (MTF) and Margins</a></li>
            <li><a href="">Charts and Orders</a></li>
            <li><a href="">Alerts and Nudges</a></li>
            <li><a href="">General</a></li>
          </ul>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="d-flex gap-3 align-items-center">
            <FontAwesomeIcon className='fs-5' icon={faWallet} />
            <h4>Funds</h4>
          </div>
          <ul className='list-unstyled px-4'>
            <li><a href="">Add Money</a></li>
            <li><a href="">WithDraw money</a></li>
            <li><a href="">Add bank Accounts</a></li>
            <li><a href="">eMandates</a></li>
          </ul>
        </div>
        <div className="col">
          <div className="d-flex gap-3 align-items-center">
            <FontAwesomeIcon className='fs-5' icon={faCircleNotch} />
            <h4>Console</h4>

          </div>
          <ul className='list-unstyled px-4'>
            <li><a href="">Add Money</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Corporate Actions</a></li>
            <li><a href="">Fund Statements</a></li>
            <li><a href="">Reports</a></li>
            <li><a href="">Profile</a></li>
            <li><a href="">Segments</a></li>
          </ul>
        </div>
        <div className="col">
          <div className="d-flex gap-3 align-items-center">
            <FontAwesomeIcon className='fs-5' icon={faCoins} />
            <h4>Coin</h4>

          </div>
          <ul className='list-unstyled px-4'>
            <li><a href="">Mutual funds</a></li>
            <li><a href="">National Pension Scheme (NPS)</a></li>
            <li><a href="">Features on Coin</a></li>
            <li><a href="">Payments and Orders</a></li>
            <li><a href="">General</a></li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default CreateTicket