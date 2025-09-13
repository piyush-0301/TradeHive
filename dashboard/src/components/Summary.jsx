  import React from "react";

  const Summary = () => {
    return (
      <>
        <div className="container py-4">
      {/* Username Greeting */}
      <div className="mb-4">
        <h6>Hi, User!</h6>
        <hr />
      </div>

      {/* Equity Section */}
      <div className="mb-4">
        <h6 className="mb-3">Equity</h6>

        <div className="bg-light p-3 rounded shadow-sm">
          <div className="mb-3">
            <h3>3.74k</h3>
            <p className="mb-0 text-muted">Margin available</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="mb-0">
              Margins used <span className="fw-semibold">0</span>
            </p>
            <p className="mb-0">
              Opening balance <span className="fw-semibold">3.74k</span>
            </p>
          </div>
        </div>
        <hr />
      </div>

      {/* Holdings Section */}
      <div className="mb-4">
        <h6 className="mb-3">Holdings (13)</h6>

        <div className="bg-light p-3 rounded shadow-sm">
          <div className="mb-3">
            <h3 className="text-success">
              1.55k <small className="text-muted">+5.20%</small>
            </h3>
            <p className="mb-0 text-muted">P&amp;L</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="mb-0">
              Current Value <span className="fw-semibold">31.43k</span>
            </p>
            <p className="mb-0">
              Investment <span className="fw-semibold">29.88k</span>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
      </>
    );
  };

  export default Summary;
