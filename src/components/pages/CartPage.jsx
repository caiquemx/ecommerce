import React, {useEffect, useState} from 'react';
import CartCard from '../cards/CartCard';

export default function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    const data = Object.values({...localStorage});
    data.forEach((product) => {
      const parsed = JSON.parse(product);
      setCartProducts((prev) => [...prev, parsed]);
    });
  }, []);

  const handleButtonClick = ({target: {id}}) => {
    if (id === 'minus') {
      if (itemQuantity == 0) return;
      setItemQuantity((prev) => prev - 1);
    }
    if (id === 'plus') {
      if (itemQuantity >= 500) return;
      setItemQuantity((prev) => {
        return prev + 1;
      });
    }
  };

  return (
    <div>
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
