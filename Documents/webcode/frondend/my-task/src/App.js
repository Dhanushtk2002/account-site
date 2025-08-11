import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import Navbar from './navbar';
import TopNavbar from './navbar';

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
       <TopNavbar/>
      <Sidebar />
      <Dashboard/>

    
      </header>
    </div>
  );
}

export default App;
