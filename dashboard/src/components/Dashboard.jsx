import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios"


import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Login from "./Login";


const Dashboard = ({ fetchHoldings, holdings }) => {
  let handleAddIcon = (stock) => {
    axios.post("http://localhost:3000/api/addToWatchlist", stock, { withCredentials: true })
      .then(fetchHoldings())
      .catch(err => console.log(err));
  }

  return (
    <div className=" row d-flex">
      <div className=" col-3 ">
        <WatchList fetchHoldings={fetchHoldings} holdings={holdings} />
      </div>
      <div style={{ maxHeight: "95vh", overflowY: "auto" }} className="col-9 pt-3 px-3 border">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings handleAddIcon={handleAddIcon} fetchHoldings={fetchHoldings} holdings={holdings} />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>

  );
};

export default Dashboard;