import React, {useState} from 'react';
import {useContext} from 'react';
import {appContext} from '../../context/appContext';

import '../../styles/cartPage.css';

export default function CartCard({id, title, availability, price, thumb}) {
  const {setTotalPrice} = useContext(appContext);
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleButtonClick = ({target}) => {
    if (target.id === 'minus') {
      if (itemQuantity == 1) return;
      setItemQuantity((prev) => prev - 1);
      setTotalPrice((prev) => (Number(prev) - Number(price)).toFixed(2));
    }
    if (target.id === 'plus') {
      if (itemQuantity >= availability) return;
      setItemQuantity((prev) => prev + 1);
      setTotalPrice((prev) => (Number(prev) + Number(price)).toFixed(2));
    }
  };

  return (
    <div
      id={id}
      className="cartProducts"
    >
      <img
        src={thumb}
        alt={title}
      />
      <h1 className="cartProductsTitle">{title}</h1>
      <p className="cartProductsPrice">{`R$ ${(price * itemQuantity).toFixed(2)}`}</p>
      <p className="itemsAvailibity">{`AVAILABLE: ${availability}`}</p>
      <div className="itemsQuantity">
        <button
          disabled={itemQuantity <= 1 ? true : false}
          className="minusButton"
          id="minus"
          onClick={(e) => handleButtonClick(e)}
          type="button"
        >
          {' '}
          -{' '}
        </button>
        <p>{itemQuantity}</p>
        <button
          disabled={itemQuantity >= availability ? true : false}
          className="plusButton"
          id="plus"
          onClick={(e) => handleButtonClick(e)}
          type="button"
        >
          {' '}
          +{' '}
        </button>
      </div>
    </div>
  );
}
