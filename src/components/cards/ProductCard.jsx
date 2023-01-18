import React from 'react';
import '../../styles/productCard.css';

export default function ProductCard({title, thumb, price}) {
  return (
    <div className="productCard">
      <img
        src={thumb}
        alt={title}
      />
      <h3>{title}</h3>
      <p className="price">{`FROM: ${(price + price * 0.1).toFixed(2)}`}</p>
      <p>{`TO: ${price.toFixed(2)}`}</p>
      <span>{'FREE SHIPPING'}</span>
      <h2>ADD TO CART</h2>
    </div>
  );
}
