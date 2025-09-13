import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faInstagram, faLinkedin, faWhatsapp, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='bg-secondary-subtle border-top mt-5 py-5 px-5'>
      <div className="container">
        <div className="row justify-content-start text-start">
          <div className=" col-lg-3 col-sm-12 mt-5">
            <img style={{ maxWidth: "40%" }} src="/media/logo.svg" alt="" />
            <p className='mt-3'>© 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.</p>
            <div className='d-flex flex-row gap-3'>
              <FontAwesomeIcon className='fs-4' icon={faXTwitter} />
              <FontAwesomeIcon className="fs-4" icon={faFacebook} />
              <FontAwesomeIcon className='fs-4' icon={faInstagram} />
              <FontAwesomeIcon className='fs-4' icon={faLinkedin} />
            </div>
            <hr />
            <div className='d-flex gap-4'>
              <FontAwesomeIcon className='fs-4' icon={faYoutube} />
              <FontAwesomeIcon className='fs-4' icon={faWhatsapp} />
              <FontAwesomeIcon className='fs-4' icon={faTelegram} />
            </div>
          </div>
          <div className="col-lg-2 col-sm-12 mt-5">
            <h4>Account</h4>
            <ul className='list-unstyled'>
              <li>Open Demat Account</li>
              <li>Minor Demat Account</li>
              <li>NRI Demat Account</li>
              <li>Commodity</li>
              <li>Dematerailisation</li>
              <li>Fund Transfer</li>
              <li>MTF</li>
              <li>Referral Program</li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-12 mt-5 ">
            <h4>Support</h4>
            <ul className='list-unstyled'>
              <li></li> Contact us
              <li>Support portal</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
              <li>Bulletin</li>
              <li>Circular</li>
              <li>Z-Connect blog</li>
              <li>Downloads</li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-12 mt-5">
            <h4>Company</h4>
            <ul className='list-unstyled'>
              <li>About</li>
              <li>Philosophy</li>
              <li>Press & media</li>
              <li>Careers</li>
              <li>Zerodha Cares (CSR)</li>
              <li>Zerodha.tech</li>
              <li>Open source</li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-12 mt-5 mb-5">
            <h4>Quick Links</h4>
            <ul className='list-unstyled'>
              <li>Upcoming IPOS</li>
              <li>Brokerage Charges</li>
              <li>Market Holidays</li>
              <li>Economic Calendar</li>
              <li>Calcultors</li>
              <li>Markets</li>
              <li>Sectors</li>
            </ul>
          </div>
        </div>

      </div>
      <div className='text-small' style={{fontSize:"12px"}}>

        <p className='mt-5 text-muted'>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

        <p className='text-muted'>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

        <p className='text-muted'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

        <p className='text-muted'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

        <p className='text-muted'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

        <p className='text-muted'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
      </div>
    </div>
  )
}

export default Footer