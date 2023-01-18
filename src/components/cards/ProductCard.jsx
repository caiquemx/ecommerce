import React from 'react';

export default function ProductCard({title, thumb, price}) {
  return (
    <div>
      <img
        src={thumb}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{'FRETE GRÁTIS'}</p>
    </div>
  );
}
