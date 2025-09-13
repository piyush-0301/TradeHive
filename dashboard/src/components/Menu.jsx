import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import BuyModal from "./BuyModal";

const Menu = ({ stocks, fetchHoldings }) => {
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
  const activeMenuClass = "menu selected";

  return (
    <>
      <div className="row d-flex justify-content-between">
        <div className="col-4 d-flex  gap-5">
          <img src="logo.png" style={{ width: "50px" }} />
          <Select
            options={stockOptions}
            value={selectedStock && selectedStock.length > 0 ? selectedStock[0].name : ""}
            onChange={(opt) => { handleOptions(opt) }}
            placeholder="Search and buy stock..."
          />
        </div>
        <div className="col-6 d-flex gap-3 py-2 justify-content-end ">
          <Link style={{ textDecoration: "none" }} to="/" onClick={() => { handleMenuClick(0) }}>
            <span className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => { handleMenuClick(1) }}>
            <span className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => { handleMenuClick(2) }}>
            <span className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => { handleMenuClick(4) }}>
            <span className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => { handleMenuClick(5) }}>
            <span className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</span>
          </Link>
        </div>
        <div className="col-1 py-2 d-flex gap-2" onClick={handleProfileClick}>
          <span >ZU</span>
          <span >USERID</span>
        </div>
        {selectedStock && selectedStock.length > 0 && <BuyModal stock={selectedStock[0]} modalOpen={modalOpen} handleClose={handleClose} />}
      </div>

    </>

  );
};

export default Menu;
