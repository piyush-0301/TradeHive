import React from 'react'

const Signup = () => {
  return (
    <div className="container text-center mt-5 py-5">
      <h2>Open a free demat and trading account online</h2>
      <h4 className='mt-4'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h4>
      <div className="row mt-5 p-5">
        <div className="col">
          <img style={{width:"80%"}} src="/media/signup.png" alt="" />
        </div>
        <div className="col mt-2 py-5">
          <form action="">
            <input className='p-2 rounded fs-5 mb-4' style={{width:"60%"}} type="text" placeholder='Enter Email' /><br />
            <input className='p-2 rounded fs-5 mb-4' style={{width:"60%"}} type="text" placeholder='Enter Username' /><br />
            <input className='p-2 rounded fs-5 mb-4' style={{width:"60%"}} type="password" placeholder='Enter Password' /><br />
            <button className='btn btn-primary px-4 fw-semibold'>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup