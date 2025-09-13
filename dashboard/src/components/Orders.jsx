import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Orders = () => {
  let [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/getOrders", { withCredentials: true })
      .then((res) => {
        setOrders(res.data);
      })
      .catch(err => console.log(err));
  }, [])
  return (
     <div className="container mt-4">
      {orders && orders.length > 0 ? (
        <>
          <h2 className="mb-4">Orders</h2>
          <div className="row">
            {orders.map((order) => (
              <div className="col-md-6 col-lg-4 mb-4" key={order._id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title mb-2">
                      {order.name} <small className="text-muted">({order.qty})</small>
                    </h5>
                    <span
                      className={`badge ${
                        order.mode === "Buy" ? "bg-success" : "bg-danger"
                      } mb-2`}
                    >
                      {order.mode}
                    </span>
                    <p className="card-text text-muted">
                      Price: ₹{order.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center mt-5">
          <p className="text-muted">You haven't placed any orders today.</p>
          <Link to="/" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
