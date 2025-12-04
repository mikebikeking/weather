import React, { useState } from 'react'
import '../index.css';
import { Search } from 'lucide-react';

const Nav = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    if (searchInput.trim()) {
      onSearch(searchInput);
      setSearchInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleIconKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <nav className='nav__header' role="navigation" aria-label="Main navigation">
      <div className="nav__title">
        <h1>Weather</h1>
        <p>Real-time conditions and forecasts</p>
      </div>

      <div className="search">
        <input 
          type="text" 
          placeholder="Search city..." 
          aria-label="Search for a city"
          aria-describedby="search-description"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <span id="search-description" className="sr-only">Enter a city name and press Enter or click the search button</span>
        <Search 
          size={20} 
          color="#555" 
          className="search__icon" 
          onClick={handleSearch}
          onKeyDown={handleIconKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Search for weather"
        />
      </div>
    </nav>
  )
}

export default Nav