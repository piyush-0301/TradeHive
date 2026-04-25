import React from 'react';

const Signup = () => {
  return (
    <div className="container text-center mt-5 py-5">
      <div className="row mt-5 p-5">
        <div className="col">
          <img style={{width: "80%"}} src="/media/signup.png" alt="" />
        </div>
        <div className="col mt-2 py-5">
          {/* Back to the original action-less form */}
          <form action=""> 
            <input className="p-2 rounded fs-5 mb-4" style={{width: "60%"}} type="text" placeholder='Enter Email' />
            <input className="p-2 rounded fs-5 mb-4" style={{width: "60%"}} type="text" placeholder='Enter Username' />
            <input className="p-2 rounded fs-5 mb-4" style={{width: "60%"}} type="password" placeholder='Enter Password' />
            
            <button className='btn btn-primary px-4 fw-semibold'>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;