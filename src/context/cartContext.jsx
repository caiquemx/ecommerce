import React, {createContext, useState} from 'react';

export const cartContext = createContext();

export default function CartProvider({children}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const value = {
    totalPrice,
    setTotalPrice,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}
