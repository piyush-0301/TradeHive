import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const NavbarCont = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
  <div className="container d-flex ">
    <Link className=""to="/">
      <img className='inline' src="/media/logo.svg" alt="Logo"style={{width:"25%"}}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className=" d-flex list-unstyled gap-5 " style={{gap:"25px"}}>
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/support">Support</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavbarCont