import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="container py-4">
      <div className="mb-4 p-3 bg-light rounded shadow-sm text-center">
        <p className="mb-3 fw-semibold">Instant, zero-cost fund transfers with UPI</p>
        <Link className="btn btn-success me-2">Add funds</Link>
        <Link className="btn btn-primary">Withdraw</Link>
      </div>

      <div className="row">
        {/* Equity Column */}
        <div className="col-md-8 mb-4">
          <h5 className="mb-3">Equity</h5>
          <div className="table-responsive bg-white p-3 rounded shadow-sm">
            <div className="d-flex justify-content-between border-bottom py-2">
              <p className="mb-0">Available margin</p>
              <p className="mb-0 fw-bold text-success">4,043.10</p>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <p className="mb-0">Used margin</p>
              <p className="mb-0 fw-bold">3,757.30</p>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <p className="mb-0">Available cash</p>
              <p className="mb-0 fw-bold">4,043.10</p>
            </div>

            <hr />

            <div className="d-flex justify-content-between py-2">
              <p className="mb-0">Opening Balance</p>
              <p className="mb-0">4,043.10</p>
            </div>
            <div className="d-flex justify-content-between py-2">
              <p className="mb-0">Opening Balance</p>
              <p className="mb-0">3736.40</p>
            </div>
            <div className="d-flex justify-content-between py-2">
              <p className="mb-0">Payin</p>
              <p className="mb-0">4064.00</p>
            </div>
            <div className="d-flex justify-content-between py-2">
              <p className="mb-0">SPAN</p>
              <p className="mb-0">0.00</p>
            </div>
            <div className="d-flex justify-content-between py-2">
              <p className="mb-0">Delivery margin</p>
              <p className="mb-0">0.00</p>
            </div>
            <div className="d-flex justify-content-between py-2">
              <p className="mb-0">Exposure</p>
              <p className="mb-0">0.00</p>
            </div>
            <div className="d-flex justify-content-between py-2 border-bottom">
              <p className="mb-0">Options premium</p>
              <p className="mb-0">0.00</p>
            </div>

            <hr />

            <div className="d-flex justify-content-between py-2">
              <p className="mb-0">Collateral (Liquid funds)</p>
              <p className="mb-0">0.00</p>
            </div>
            <div className="d-flex justify-content-between py-2">
              <p className="mb-0">Collateral (Equity)</p>
              <p className="mb-0">0.00</p>
            </div>
            <div className="d-flex justify-content-between py-2">
              <p className="mb-0">Total Collateral</p>
              <p className="mb-0">0.00</p>
            </div>
          </div>
        </div>

        {/* Commodity Column */}
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="text-center bg-white p-4 rounded shadow-sm w-100">
            <p className="mb-3">You don't have a commodity account</p>
            <Link className="btn btn-primary">Open Account</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Funds;
