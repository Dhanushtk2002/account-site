import React from "react";
import "./sales.css";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const Sales = () => {
  const chartData = {
    labels: ["Draft", "Started", "Paid", "Close"],
    datasets: [
      {
        data: [25, 30, 25, 20],
        backgroundColor: ["#4a90e2", "#b3d4fc", "#8bc34a", "#c62828"],
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="sales-content">
      <div className="sales-header">
        <h2>Customer Billing Area</h2>
        <div className="tabs">
          <button className="active">Sales</button>
          <button>Reports</button>
          <button>Dashboard</button>
        </div>
      </div>

      <div className="sales-body">
        <div className="sales-icons">
          <h3>Sales</h3>
          <div className="icon-grid">
            <div className="icon-item">Create Quick Sales</div>
            <div className="icon-item">Create Detailed Invoice</div>
            <div className="icon-item">Invoices List</div>
            <div className="icon-item">Create Sales Order</div>
            <div className="icon-item">Sales Order List</div>
            <div className="icon-item">Customers Invoices</div>
            <div className="icon-item">Create Prospects</div>
            <div className="icon-item">Prospects List</div>
            <div className="icon-item">New Contract</div>
            <div className="icon-item">List of Contracts</div>
            <div className="icon-item">Create Contact</div>
            <div className="icon-item">List of Contacts / Address</div>
            <div className="icon-item">Create Customer</div>
            <div className="icon-item">Customer Details</div>
            <div className="icon-item">Template Invoice</div>
            <div className="icon-item">Payments Received from Customers</div>
            <div className="icon-item">Create Proposal</div>
            <div className="icon-item">Proposals</div>
          </div>
        </div>

        <div className="sales-icons">
          <h3>Settings</h3>
          <div className="icon-grid">
            <div className="icon-item">Product Accounting</div>
            <div className="icon-item">VAT Accounts</div>
            <div className="icon-item">Customers Tags / Categories</div>
            <div className="icon-item">Contacts Tags / Categories</div>
            <div className="icon-item">Generate Barcode</div>
          </div>
        </div>

        <div className="chart-section">
          <h4>Statistics - Customer Invoice</h4>
          {chartData && <Doughnut data={chartData} />}
        </div>
      </div>
    </div>
  );
};

export default Sales;
