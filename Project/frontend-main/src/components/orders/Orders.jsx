import React from "react";
import "./Orders.css";

function Orders() {
  return (
    <div className="orders-page">
      <div className="orders-card">
        <div className="orders-header">
          <h2 className="text-primary">Order History</h2>
          <p>Track the most recent orders from your account.</p>
        </div>
        <div className="order-item">
          <div className="order-meta">
            <span className="order-id">#10234</span>
            <span className="order-date">Apr 28, 2026</span>
          </div>
          <div className="order-summary">2 items • Total $89.99</div>
          <span className="status delivered">Delivered</span>
        </div>
        <div className="order-item">
          <div className="order-meta">
            <span className="order-id">#10179</span>
            <span className="order-date">Apr 10, 2026</span>
          </div>
          <div className="order-summary">1 item • Total $34.50</div>
          <span className="status processing">Processing</span>
        </div>
        <div className="order-item">
          <div className="order-meta">
            <span className="order-id">#10234</span>
            <span className="order-date">Apr 28, 2026</span>
          </div>
          <div className="order-summary">2 items • Total $89.99</div>
          <span className="status delivered">Delivered</span>
        </div>
        <div className="order-item">
          <div className="order-meta">
            <span className="order-id">#10179</span>
            <span className="order-date">Apr 10, 2026</span>
          </div>
          <div className="order-summary">1 item • Total $34.50</div>
          <span className="status processing">Processing</span>
        </div>
        <div className="order-item">
          <div className="order-meta">
            <span className="order-id">#10234</span>
            <span className="order-date">Apr 28, 2026</span>
          </div>
          <div className="order-summary">2 items • Total $89.99</div>
          <span className="status delivered">Delivered</span>
        </div>
        <div className="order-item">
          <div className="order-meta">
            <span className="order-id">#10179</span>
            <span className="order-date">Apr 10, 2026</span>
          </div>
          <div className="order-summary">1 item • Total $34.50</div>
          <span className="status processing">Processing</span>
        </div>
      </div>
    </div>
  );
}

export default Orders;
