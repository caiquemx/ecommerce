import React from 'react';
import '../../styles/productCard.css';
import '../../styles/notFirstProductCard.css';

export default function ProductCard({title, thumb, price, shipping, notFirst}) {
  return (
    <div className={notFirst ? 'notFirstProductCard' : 'productCard'}>
      <img
        src={thumb}
        alt={title}
      />
      <h3>{title}</h3>
      <p className="price">{`FROM: ${(price + price * 0.1).toFixed(2)}`}</p>
      <p>{`TO: ${price.toFixed(2)}`}</p>
      {<span>{shipping ? 'FREE SHIPPING' : ''}</span>}
      <h2>ADD TO CART</h2>
    </div>
  );
}
