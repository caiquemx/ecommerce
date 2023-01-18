import React, {useEffect, useState} from 'react';

import {getCategories, getProducts, getProductsByCategories} from '../../utils/api';
import ProductCard from '../cards/ProductCard';
import '../../styles/homePage.css';

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [shipping, setShipping] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await getCategories();
      const data1 = await getProducts();
      setCategories(data);
      setProducts(data1);
    };
    fetch();
  }, []);

  const handleClick = async ({target}) => {
    const data = await getProductsByCategories(target.id);
    console.log('hello', target.id);
    setShipping(false);
    setProducts(data);
  };

  console.log(shipping);
  console.log(products);

  return (
    <main>
      <section className="inputSection">
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          className="searchInput"
        />
      </section>
      <section id="categoriesSection">
        <div className="categories">
          {categories.map(({id, name}) => (
            <label htmlFor={id}>
              <p
                id={id}
                onClick={handleClick}
                key={id}
              >
                {name}
              </p>
            </label>
          ))}
        </div>
      </section>
      <section className="freeShippingProductsSection">
        {products.map((p) => {
          if (shipping) {
            if (p.shipping.free_shipping)
              return (
                <ProductCard
                  shipping={p.shipping.free_shipping}
                  thumb={p.thumbnail}
                  title={p.title}
                  price={p.price}
                />
              );
          }
          if (!shipping)
            return (
              <ProductCard
                shipping={p.shipping.free_shipping}
                thumb={p.thumbnail}
                title={p.title}
                price={p.price}
              />
            );
        })}
      </section>
    </main>
  );
}
