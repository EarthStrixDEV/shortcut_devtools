import React, { useState, useEffect } from 'react'
import '../css/Header.css'

const Header = () => {
    const [search, setSearch] = useState("");
    const data_grid = [
        "w3school",
        "programiz",
        "mozilla developer",
        "react docs",
        "codepen",
        "replit ide online",
        "css gradient generator",
        "css gradient animator",
    ];

    function handleSetSearch(event) {
        setSearch(event.target.value.toUpperCase());
    }

    function handleSearchData() {
        if (data_grid.includes(search.toLowerCase())) {
            if (search.toLowerCase() === data_grid[0]) {
                alert(`${ search } at row 1 / col 1`);
            }
            if (search.toLowerCase() === data_grid[1]) {
                alert(`${ search } at row 1 / col 2`);
            }
            if (search.toLowerCase() === data_grid[2]) {
                alert(`${ search } at row 2 / col 1`);
            }
            if (search.toLowerCase() === data_grid[3]) {
                alert(`${ search } at row 2 / col 2`);
            }
        } else {
            alert(`${ search } have not found`);
        }
    }

    return (
      <div>
        <header>
            <div className="header-name">
                <h1>ShortCut DevTools</h1>
            </div>
            <div className="input-search">
                <label for="">
                <input type="text" name="text-search" onChange={handleSetSearch}/>
                <button type="submit" onClick={handleSearchData}>OK</button>
                </label>
            </div>
        </header>
      </div>
    );
}

export default Header