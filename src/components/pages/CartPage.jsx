import React, {useEffect, useState, useContext} from 'react';
import CartCard from '../cards/CartCard';
import {cartContext} from '../../context/cartContext';

import '../../styles/cartPage.css';

export default function CartPage() {
  const {totalPrice, setTotalPrice} = useContext(cartContext);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    setTotalPrice(0);
    setCartProducts([]);
    const data = Object.values({...localStorage});
    data.forEach((product) => {
      const parsed = JSON.parse(product);
      setCartProducts((prev) => [...prev, parsed]);
      setTotalPrice((prev) => prev + Number(parsed.price));
    });
  }, []);

  return (
    <section className="cartSection">
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
      <div className="cartPaymentSection">
        <div className="paymentContainer">
          <p className="totalPrice">{`TOTAL: R$ ${totalPrice}`}</p>
          <button
            className="buyButton"
            type="button"
          >
            BUY
          </button>
        </div>
      </div>
    </section>
  );
}
