import React, { useState, useEffect } from 'react'
import '../css/Header.css'

const Header = () => {
    const [search, setSearch] = useState("");
    function handleSearch() {
        setSearch(search);
    }
    return (
      <div>
        <header>
            <div className="header-name">
                <h1>ShortCut DevTools</h1>
            </div>
            <div className="input-search">
                <label for="">
                <input type="text" name="text-search" />
                <button type="submit">OK</button>
                </label>
            </div>
        </header>
      </div>
    );
}

export default Header