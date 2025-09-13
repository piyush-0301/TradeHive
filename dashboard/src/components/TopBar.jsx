import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import BuyModal from "./BuyModal";
import { Person } from "@mui/icons-material";
import { Route } from "react-router-dom";
import Login from "./Login.jsx"

const TopBar = ({ user, stocks, fetchHoldings }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const stockOptions = stocks.map((s) => ({
    value: s.symbol,
    label: `${s.name} (${s.symbol}) - ₹${s.ltp}`,
    stock: s,
  }));

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  let handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen)
  };
  let handleClose = () => {
    setModalOpen(false);
    setSelectedStock(null);
    fetchHoldings();
  }
  let handleOptions = (opt) => {
    setSelectedStock((prev) => {
      return [opt.stock];
    });
    setModalOpen(true);
  };
  const menuClass = "menu";
  const activeMenuClass = "menuSelected";

  return (
    <div className="row py-2 ">
      <div className="col-4 col-md-5 px-2 d-flex gap-5">
        <img className="ms-5" src="logo.png" style={{ width: "50px" }} />
        <Select className="w-100"
          options={stockOptions}
          value={selectedStock && selectedStock.length > 0 ? selectedStock[0].name : ""}
          onChange={(opt) => { handleOptions(opt) }}
          placeholder="Search and buy stock..."
        />
      </div>
      <div className="col-8 col-md-7 d-flex justify-content-end px-5 py-2">
        <div className="row">
          <div className="col">
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => { handleMenuClick(0) }}>
              <span className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</span>
            </Link>
          </div>
          <div className="col">
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => { handleMenuClick(1) }}>
              <span className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</span>
            </Link>
          </div>
          <div className="col">
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => { handleMenuClick(2) }}>
              <span className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</span>
            </Link>
          </div>
          <div className="col">
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => { handleMenuClick(4) }}>
              <span className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</span>
            </Link>
          </div>
          <div className="col">
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => { handleMenuClick(5) }}>
              <span className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</span>
            </Link>
          </div>
          <div className="col" onClick={handleProfileClick}>
            <span style={{ cursor: "pointer" }}><Person /></span>
            {isProfileDropdownOpen ?
              <div className="dropdown"><strong><i>tanuj.gaware</i></strong>
                <div><Link to="/signup">Signup</Link></div>
                {user ? <div>Logout</div> : <div><Link to="/login">LogIn</Link></div>}
              </div>
              :
              <></>
            }
          </div>
        </div>
      </div>
      {selectedStock && selectedStock.length > 0 && <BuyModal stock={selectedStock[0]} modalOpen={modalOpen} handleClose={handleClose} />}
    </div>

  );
};

export default TopBar;
