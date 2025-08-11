import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import './dashboard.css';

const salesData = [
  { name: 'Jan', income: 50000 },
  { name: 'Feb', income: 80000 },
  { name: 'Mar', income: 100000 },
  { name: 'Apr', income: 150000 },
  { name: 'May', income: 180000 },
];

const pieData = [
  { name: 'Sales Orders', value: 67, color: '#3b82f6' },
  { name: 'Quotations', value: 61, color: '#60a5fa' },
  { name: 'Contracts', value: 19, color: '#93c5fd' },
  { name: 'Others', value: 25, color: '#e5e7eb' },
];

const totalSales = pieData.reduce((acc, cur) => acc + cur.value, 0);

const bankAccounts = [
  { name: '45150', value: '-346,204.00 ZMW', change: '-17%' },
  { name: 'BISL_FNB', value: '-31,686.00 ZMW', change: '-2%' },
  { name: 'CanaNank', value: '-32,108.00 ZMW', change: '-2%' },
  { name: 'CreditBank', value: '17,384.00 ZMW', change: '+1%' },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Top Grid */}
      <div className="top-grid">
        {/* Greeting Card */}
        <div className="greeting-card card">
          <h4>
            Good Morning, <span className="highlight">vox_admin!</span>
          </h4>
          <p>Here's what's happening with your store today</p>
          <div className="metrics-row">
            <div>Today's Invoices<br /><strong>0</strong></div>
            <div>Today's Sales Amount<br /><strong>0.00 ZMW</strong></div>
            <div>Today's Refund<br /><strong>0.00 ZMW</strong></div>
            <div>Today's Purchase<br /><strong>0</strong></div>
            <div>Today's Purchase Amount<br /><strong>0.00 ZMW</strong></div>
          </div>
          <div className="image-placeholder">🏪</div>
        </div>

        {/* ZRA and Sales Overview */}
        <div className="stats-grid">
          <div className="stat-card">
            <p>ZRA Signed Invoices</p>
            <strong>47</strong>
            <small>Last Year: 0 | ▲ 47%</small>
          </div>
          <div className="stat-card">
            <p>ZRA Total Sale</p>
            <strong>78,842.00 ZMW</strong>
            <small>▲ 788411%</small>
          </div>
          <div className="stat-card">
            <p>ZRA Sale Tax</p>
            <strong>10,176.00 ZMW</strong>
            <small>▲ 10176.2%</small>
          </div>
          <div className="stat-card">
            <p>Sales Orders</p>
            <strong>67</strong>
            <small>▲ 67%</small>
          </div>
          <div className="stat-card">
            <p>Contract</p>
            <strong>19</strong>
            <small>▼ 19%</small>
          </div>
          <div className="stat-card">
            <p>Shipment</p>
            <strong>20</strong>
            <small>▲ 20%</small>
          </div>
        </div>

        {/* Bank Details */}
        <div className="bank-card card">
          <h3>Bank Details</h3>
          {bankAccounts.map((bank, index) => (
            <div className="bank-row" key={index}>
              🏦 {bank.name}
              <span className={bank.change.startsWith('+') ? 'up' : 'down'}>
                {bank.change} {bank.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Charts Grid */}
      <div className="charts-grid">
        {/* Pie Chart */}
        <div className="card pie-card">
          <div className="pie-header">
            <div className="tabs">
              <span className="tab active">Sales</span>
              <span className="tab">Purchase</span>
            </div>
            <button className="filter-btn">Whole Year</button>
          </div>

          <div style={{ position: 'relative', height: '220px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="pie-center-text">
              <strong>Total Sales</strong>
              <p style={{ fontSize: '18px', margin: '4px 0' }}>{totalSales}</p>
            </div>
          </div>

          <div className="pie-stats">
            <div><strong>67</strong><p>Total Sales Orders</p></div>
            <div><strong>61</strong><p>Total Quotations</p></div>
            <div><strong>19</strong><p>Total Contract</p></div>
          </div>

          <div className="pie-values">
            <p><span>Total Sale Amount</span><strong>594,385.03 ZMW</strong></p>
            <p><span>Paid Amount</span><strong>124,446.13 ZMW</strong></p>
            <p><span>Balance Amount</span><strong>469,938.90 ZMW</strong></p>
            <p><span>Total Refund</span><strong>-732.00 ZMW</strong></p>
          </div>
        </div>

        {/* Composed Chart */}
        <div className="card chart-card">
            <div className="chart-header">
          <p>Sales Analytics</p>
          <p>Jan 01, 2025 - Jan 01, 2026</p>
          </div>
         <div className="summary-line centered">
  <span className="big-number">
    593,654.00 ZMW <span className="dim-text">Income</span>
  </span>
  <span className="separator">|</span>
  <span><strong>86</strong> Sales</span>
  <span className="separator">|</span>
  <span><strong>28</strong> Customers</span>
</div>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="income" stroke="#f59e0b" fill="#fcd34d" fillOpacity={0.3} />
              <Bar dataKey="income" barSize={30} fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bottom-grid">
  {/* Last 7 Sales */}
  <div className="card sales-table-card">
    <div className="sales-header">
      <h4>Last 7 Sales</h4>
      <a href="#" className="view-all-link">View All</a>
    </div>
    <table className="sales-table">
      <thead>
        <tr>
          <th>Ref.</th>
          <th>Invoice Date</th>
          <th>Third-Party</th>
          <th>Amount (Inc. Tax)</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {[
          { ref: 'INV2507-0015', date: '31,Jul 2025', party: 'CU2507-00026 - AAAA', amount: '400.00', status: 'NOT PAID' },
          { ref: 'TC1-2507-0033', date: '30,Jul 2025', party: 'CU2502-00001 - Customer1', amount: '27,850.00', status: 'PAID' },
          { ref: 'INV2507-0012', date: '30,Jul 2025', party: 'CU2507-00027 - Big Brothers (Frank)', amount: '302.55', status: 'PAID' },
          { ref: 'INV2507-0013', date: '30,Jul 2025', party: 'CU2506-00013 - Itc Limited', amount: '76,367.66', status: 'NOT PAID' },
          { ref: 'INV2507-0014', date: '30,Jul 2025', party: 'CU2506-00014 - Newtech Computers', amount: '32,251.28', status: 'NOT PAID' },
          { ref: '(PROV-POS1-0)', date: '30,Jul 2025', party: 'CU2502-00001 - Customer1', amount: '550.00', status: 'DRAFT' },
          { ref: 'INV2507-0004', date: '28,Jul 2025', party: 'CU2507-00026 - AAAA', amount: '302.55', status: 'NOT PAID' },
        ].map((row, i) => (
          <tr key={i}>
            <td><a href="#"><i className="far fa-file-alt" style={{ marginRight: '6px' }}></i>{row.ref}</a></td>
            <td>{row.date}</td>
            <td>{row.party}</td>
            <td>{row.amount}</td>
            <td><span className={`status-tag ${row.status.toLowerCase().replace(' ', '-')}`}>{row.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Sales by Country */}
  <div className="card map-sales-card">
    <h4>Sales by Country</h4>
    <div className="map-placeholder">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/World_map_blank_without_borders.svg/800px-World_map_blank_without_borders.svg.png" alt="World Map" style={{ width: '100%' }} />
    </div>
    <div className="currency-bars">
      <div className="currency-row">
        <span>ZMW</span>
        <span>591,855.03</span>
      </div>
      <div className="bar bar-zwm" />
      <div className="currency-row">
        <span>USD</span>
        <span>105.20</span>
      </div>
      <div className="bar bar-usd" />
    </div>
  </div>
</div>

    </div>
  );
};

export default Dashboard;
