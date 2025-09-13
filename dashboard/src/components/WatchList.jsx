import React, { useState, useEffect } from "react";
import axios from "axios"
import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material"
import BuySellModal from "./BuySellModal"; // import modal
import { DoughnutChart } from "./DoughnutChart";


const WatchList = ({ holdings, fetchHoldings }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [labels, setlabels] = useState([]);
  useEffect(() => {
    const list = holdings.filter((item) => {
      return item.inWatchlist === true;
    }) || [];
    setWatchlist(list);
    let label=list.map((item) => { return item.name });
    setlabels(label);
  }, [holdings]);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map(stock => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      },
    ],
  };

  const handleModalOpen = (action, stock) => {
    setModalAction(action);
    setSelectedStock(stock);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedStock(null);
  };
  return (
    <div style={{ maxHeight: "94vh", overflowY: "auto" }} className="p-3 border  mb-3 ">
      <div className="mb-3 d-flex justify-content-between">
        <span className="badge bg-secondary align-self-center">{watchlist.length}/50</span>
      </div>

      <ul className="mb-3">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} onAction={handleModalOpen} />
        ))}
      </ul>

      <DoughnutChart  data={data} />

      <BuySellModal
        open={modalOpen}
        handleClose={handleModalClose}
        action={modalAction}
        stock={selectedStock}
        fetchHoldings={fetchHoldings}
      />
    </div>

  );
};

export default WatchList;

const WatchListItem = ({ stock, onAction }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);
  const handleMouseEnter = () => {
    setShowWatchlistActions(true)
  }
  const onMouseExit = () => {
    setShowWatchlistActions(false);
  }
  return (
    <li className="row border mb-2">
      <div className="col">
        <strong className={stock.isDown ? "text-danger" : "text-success"}>{stock.name}</strong>
      </div>

      <div >
        <span className="">{stock.percent}%</span>
        {stock.isDown ? <KeyboardArrowDown className="text-danger" /> : <KeyboardArrowUp className="text-success" />}
        <span className="">₹{stock.price}</span>
      </div>

      <span className="btn-group col">
        <Tooltip title="Buy (B)">
          <button className="btn btn-sm btn-success" onClick={() => onAction("Buy", stock)}>Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)">
          <button className="btn btn-sm btn-danger" onClick={() => onAction("Sell", stock)}>Sell</button>
        </Tooltip>
      </span>
    </li>

  )
}
