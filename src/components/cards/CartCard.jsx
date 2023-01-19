import React, {useState} from 'react';

export default function CartCard({id, title, availability, price, oldPrice, thumb}) {
  const [itemQuantity, setItemQuantity] = useState(0);

  const handleButtonClick = ({target}) => {
    if (target.id === 'minus') {
      if (itemQuantity == 0) return;
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
      <h1>{title}</h1>
      <p>{oldPrice}</p>
      <p>{price}</p>
      <p>{`AVAILABLE: ${availability}`}</p>
      <div className="itemsQuantity">
        <button
          id="minus"
          onClick={(e) => handleButtonClick(e)}
          type="button"
        >
          {' '}
          -{' '}
        </button>
        <p>{itemQuantity}</p>
        <button
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
