import React, {useState} from 'react';

import '../../styles/cartPage.css';

export default function CartCard({id, title, availability, price, oldPrice, thumb}) {
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleButtonClick = ({target}) => {
    if (target.id === 'minus') {
      if (itemQuantity == 1) return;
      setItemQuantity((prev) => prev - 1);
    }
    if (target.id === 'plus') {
      if (itemQuantity >= availability) return;
      setItemQuantity((prev) => {
        return prev + 1;
      });
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
      <p className="cartProductsPrice">{`R$ ${price}`}</p>
      <p className="itemsAvailibity">{`AVAILABLE: ${availability}`}</p>
      <div className="itemsQuantity">
        <button
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
