import './App.css';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import TopNavbar from './navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
 
// Temporary placeholder components
function Home() { return <h1>Home</h1>; }
function Sales() { return <h1>Sales</h1>; }
function Purchases() { return <h1>Purchases</h1>; }
 
function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sales">Sales</Link></li>
              <li><Link to="/purchases">Purchases</Link></li>
            </ul>
          </aside>
 
          {/* Main Content */}
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/purchases" element={<Purchases />} />
            </Routes>
          </main>
        </div>
      </Router>
 
      <TopNavbar />
      <Sidebar />
      <Dashboard />
    </div>
  );
}
 
export default App;