import React, { useState } from "react";
import ToolsGrid from "./ToolsGrid";
import ToolsGrid2 from "./ToolsGrid2";
import ToolsGrid3 from "./ToolsGrid3";
import { Route, Link, Routes } from "react-router-dom";
import "../css/Header.css";
import "../css/App.css";

const Header = () => {
  const [search, setSearch] = useState("");

  function handleSetSearch() {
    let text_value = document.getElementById("text-search");
    setSearch(text_value.value.toUpperCase());
    // clear input value ,reset state
    setTimeout(() => {
      setSearch("");
      text_value.value = "";
    }, 1500);
  }

  return (
    <div>
      <header>
        <div className="header-name">
          <h1>ShortCut DevTools</h1>
        </div>
        <div className="input-search">
          <label for="">
            <input type="text" id="text-search" />
            <button type="submit" onClick={handleSetSearch}>
              OK
            </button>
          </label>
        </div>
      </header>
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
        <Route path="/" element={<ToolsGrid value={search} />} />
        <Route path="/devtools" element={<ToolsGrid2 value={search} />} />
        <Route path="/api" element={<ToolsGrid3 value={search} />}></Route>
      </Routes>
    </div>
  );
};

export default Header;
