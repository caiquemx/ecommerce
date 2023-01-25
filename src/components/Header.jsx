import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {appContext} from '../context/appContext';

import '../styles/header.css';

export default function Header() {
  const navigate = useNavigate();
  const [searchInputValue, setSearchInputValue] = useState();
  const {searchError, setSearchValue} = useContext(appContext);

  const handleSearchClick = () => {
    setSearchValue(searchInputValue);
  };

  return (
    <div className="header">
      <header>
        <button
          onClick={() => navigate('/')}
          type="button"
        >
          HOME
        </button>
        <input
          className="searchInput"
          id="searchInput"
          name="searchInput"
          onChange={({target}) => setSearchInputValue(target.value)}
          type="text"
          value={searchInputValue}
        />
        <button
          className="searchButton"
          onClick={handleSearchClick}
          type="submit"
        >
          SEARCH
        </button>
        <button
          className="cartButton"
          onClick={() => navigate('/cart')}
          type="button"
        >
          CART
        </button>
        {searchError && <span className="searchError">Products not found</span>}
      </header>
    </div>
  );
}
