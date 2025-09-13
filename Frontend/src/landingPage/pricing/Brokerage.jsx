import React from 'react'

const Brokerage = () => {
  return (
    <div className='container  d-flex flex-column justify-content-center'>
      <div className='mb-5'>
        <h2 className='mb-5'>Charges for Account Opening</h2>
        <table className='fs-5 border text-muted'>
          <tr className='border'>
            <th>Type of Account</th>
            <th>Charges</th>
          </tr>
          <tr >
            <td>Online Account</td>
            <td>Free</td>
          </tr>
          <tr style={{backgroundColor:"#eee"}}>
            <td>Offline Account</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>NRI account(offline only)</td>
            <td>$500</td>
          </tr>
          <tr style={{backgroundColor:"#eee"}}>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>$500</td>
          </tr>
        </table>

      </div>
      <div className='mt-5'>
        <h2 className='mb-5'>Charges for optional value added services</h2>
        <table className='fs-5 border text-muted'>
          <tr className='border'>
            <th>Service</th>
            <th>Billing Frequency</th>
            <th>Charges</th>
          </tr>
          <tr >
            <td>Tickertape</td>
            <td>Monthly / Annual</td>
            <td>Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr style={{backgroundColor:"#eee"}}>
            <td>Smallcase</td>
            <td>Per transaction</td>
            <td>Buy & Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>Connect: 500 | Historical: 500</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Brokerage