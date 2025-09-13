import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios"
import { toast } from "react-toastify";

const socket = io("http://localhost:3000");

const Home = () => {
  let [user,setUser]=useState(null);
  let [stocks, setStocks] = useState([]);
  let [holdings, setholdings] = useState([]);
  useEffect(()=>{
    isAuthenticated();
  },[]);
  let fetchHoldings = () => {
    axios.get("http://localhost:3000/allholdings", { withCredentials: true })
      .then((res) => {
        setholdings(res.data);
      })
      .catch((err) => { console.log(err) })
  }
  useEffect(() => {
    socket.on("stock-updated", (updatedStock,newHoldings) => {
      setStocks(updatedStock);
      fetchHoldings();    
    });
  }, []);
  let isAuthenticated=async()=>{
    axios.get("http://localhost:3000/isAuthenticated",{withCredentials:true})
    .then((res)=>setUser(res.data))
    .catch(err=>toast.error("Some Error Occured"));
  }

  return (
    <>
      <TopBar user={user} stocks={stocks} fetchHoldings={fetchHoldings}/>
      <Dashboard fetchHoldings={fetchHoldings} holdings={holdings}/>
    </>
  );
};

export default Home;
