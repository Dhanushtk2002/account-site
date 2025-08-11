import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import Navbar from './navbar';
import TopNavbar from './navbar';
import Sales from './sales';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       {/* <Navbar/> */}
        <Router>
      <div className="app-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sales">Sales</Link>
            </li>
            <li>
              <Link to="/purchases">Purchases</Link>
            </li>
          </ul>
        </aside>
        {/* Main Content */}
        <main className="content">
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/purchases" element={<h1>Purchases Page</h1>} />
          </Routes>
        </main>
      </div>
    </Router>

       <TopNavbar/>
      <Sidebar />
      <Dashboard/>
      <Sales/>
    
      </header>
    </div>
  );
}

export default App;
