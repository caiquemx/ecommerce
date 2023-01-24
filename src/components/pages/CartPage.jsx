import React, {useEffect, useState} from 'react';
import CartCard from '../cards/CartCard';

import '../../styles/cartPage.css';

export default function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const data = Object.values({...localStorage});
    data.forEach((product) => {
      const parsed = JSON.parse(product);
      setCartProducts((prev) => [...prev, parsed]);
    });
  }, []);

  return (
    <div className="cartProductsSection">
      {cartProducts.map(({id, title, availability, price, oldPrice, thumb}) => {
        return (
          <CartCard
            id={id}
            title={title}
            availability={availability}
            price={price}
            oldPrice={oldPrice}
            thumb={thumb}
          />
        );
      })}
    </div>
  );
}
