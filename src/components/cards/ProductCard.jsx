import React from 'react';

import {useNavigate} from 'react-router-dom';

import '../../styles/productCard.css';
import '../../styles/freeShippingCard.css';

export default function ProductCard({title, thumb, price, shipping, notFirst, id}) {
  const navigate = useNavigate();

  const handleCardClick = async ({target}) => {
    navigate(`/${id}`, false, id);
  };

  return (
    <div
      className={notFirst ? 'freeShippingCard' : 'productCard'}
      id={id}
      onClick={handleCardClick}
    >
      <img
        src={thumb}
        alt={title}
      />
      <h3>{title}</h3>
      <p className="price">{`FROM: ${price.toFixed(2)}`}</p>
      <p>{`TO: ${(price - price * 0.1).toFixed(2)}`}</p>
      {<span>{shipping ? 'FREE SHIPPING' : ''}</span>}
      <h2>ADD TO CART</h2>
    </div>
  );
}
