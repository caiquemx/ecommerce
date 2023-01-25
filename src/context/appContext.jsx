import React, {createContext, useState} from 'react';

export const appContext = createContext();

export default function AppProvider({children}) {
  const [searchValue, setSearchValue] = useState();
  const [searchError, setSearchError] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const value = {
    totalPrice,
    searchError,
    searchValue,
    setTotalPrice,
    setSearchError,
    setSearchValue,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}
