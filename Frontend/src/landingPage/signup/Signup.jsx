import { useNavigate } from 'react-router-dom';
import React from 'react'

const Signup = () => {
  const navigate = useNavigate();

  // --- ADD THIS LOGIC HERE ---
  const handleSignup = (e) => {
    e.preventDefault(); // This stops the page from refreshing
    
    // In a real app, you'd do your axios.post here.
    // For now, let's just force it to the dashboard to test:
    console.log("Signup successful!");
    navigate('/dashboard'); 
  };
  // ---------------------------

  return (
    <div className="container text-center mt-5 py-5">
      {/* ... your other code ... */}
      
      <div className="col mt-2 py-5">
        {/* Update your form tag to use the function */}
        <form onSubmit={handleSignup}> 
          <input className="p-2 rounded fs-5 mb-4" style={{width:"60%"}} type="text" placeholder='Enter Email' />
          <input className="p-2 rounded fs-5 mb-4" style={{width:"60%"}} type="text" placeholder='Enter Username' />
          <input className="p-2 rounded fs-5 mb-4" style={{width:"60%"}} type="text" placeholder='Enter Password' />
          
          <button type="submit" className='btn btn-primary px-4 fw-semibold'>Sign In</button>
        </form>
      </div>
      
      {/* ... rest of your code ... */}
    </div>
  );
};

export default Signup