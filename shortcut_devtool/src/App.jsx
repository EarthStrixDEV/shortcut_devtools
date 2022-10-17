import React from 'react'
import Header from './components/Header.jsx'
import ToolsGrid from './components/ToolsGrid.jsx'
import ToolsGrid2 from './components/ToolsGrid2.jsx'
import Footer from './components/Footers.jsx'
import './css/App.css'
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Header />
      <div>
        <div className="page-number-container">
          <span className="item-element">
            <Link to="/">Website</Link>
          </span>
          <span className="item-element">
            <Link to="/devtools">DevTools</Link>
          </span>
          <span className="item-element">
            <Link to="/api">API</Link>
          </span>
        </div>
        <Routes>
          <Route path="/" element={ <ToolsGrid /> } />
          <Route path="/devtools" element={ <ToolsGrid2 /> } />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App