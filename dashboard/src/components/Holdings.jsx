import { useEffect, useState } from "react";
import { VerticalGraph } from "./VerticalGraph";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import 'bootstrap/dist/css/bootstrap.min.css';
import BuySellModal from "./BuySellModal";

const Holdings = ({ fetchHoldings, holdings, handleAddIcon }) => {
  let [modalOpen, setModalOpen] = useState(false);
  let [selectedStock, setSelectedStock] = useState([]);
  let [modalAction, setModalAction] = useState("");
  useEffect(() => {
    fetchHoldings();
  }, []);
  const labels = holdings.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Name",
        data: holdings.map((stock) => {
          return stock.price;
        }),
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  };
  let handleClick = (stock, mode) => {
    setModalOpen(true);
    setSelectedStock(stock);
    setModalAction(mode);
  }
  let handleModalClose = () => {
    setSelectedStock([]);
    setModalOpen(false);
    setModalAction("");
  }
  const totalInvestment = holdings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );

  const currentValue = holdings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );

  const profitLoss = currentValue - totalInvestment;
  const profitLossPercent =
    totalInvestment > 0 ? (profitLoss / totalInvestment) * 100 : 0;

  const isProfit = profitLoss >= 0;
  const profitClass = isProfit ? "text-success" : "text-danger";
  return (
    <>
      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered table-striped text-center align-middle">
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. cost</th>
                  <th>LTP</th>
                  <th>Cur. val</th>
                  <th>P&L</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? "text-success fw-bold" : "text-danger fw-bold";

                  return (
                    <tr key={index}>
                      <td>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span>{stock.name}</span>
                          {stock.inWatchlist === false ? (
                            <AddIcon
                              onClick={() => handleAddIcon(stock)}
                              type="button"
                              className="fs-3 btn btn-outline-primary btn-sm"
                            />
                          ) : (
                            <RemoveIcon
                              onClick={() => handleAddIcon(stock)}
                              type="button"
                              className="fs-3 btn btn-outline-danger btn-sm"
                            />
                          )}
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                          <button
                            onClick={() => handleClick(stock, "Buy")}
                            className="btn btn-success btn-sm"
                          >
                            Buy More
                          </button>
                          <button
                            onClick={() => handleClick(stock, "Sell")}
                            className="btn btn-danger btn-sm"
                          >
                            Sell
                          </button>
                        </div>
                      </td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td>{curValue.toFixed(2)}</td>
                      <td className={profClass}>{stock.percent}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row text-center my-4">
          <div className="col">
            <h5 className="mb-1 fw-bold">
              {totalInvestment.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h5>
            <p className="text-muted mb-0">Total investment</p>
          </div>
          <div className="col">
            <h5 className="mb-1 fw-bold">
              {currentValue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h5>
            <p className="text-muted mb-0">Current value</p>
          </div>
          <div className="col">
            <h5 className={`mb-1 fw-bold ${profitClass}`}>
              {profitLoss.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              <span className={`fw-normal ${profitClass}`}>
                ({profitLossPercent.toFixed(2)}%)
              </span>
            </h5>
            <p className="text-muted mb-0">P&amp;L</p>
          </div>
        </div>

        {selectedStock && setSelectedStock.length > 0 && (
          <BuySellModal
            open={modalOpen}
            handleClose={handleModalClose}
            action={modalAction}
            stock={selectedStock}
            fetchHoldings={fetchHoldings}
          />
        )}

        <VerticalGraph data={data} />
      </div>


    </>
  );
};

export default Holdings;
