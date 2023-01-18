import React, {useEffect, useState} from 'react';

import {getCategories, getProducts} from '../../utils/api';
import ProductCard from '../cards/ProductCard';
import '../../styles/homePage.css';

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getCategories();
      const data1 = await getProducts();
      setCategories(data);
      setProducts(data1);
    };
    fetch();
  }, []);

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
            <div>
              <p key={id}>{name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="freeShippingProductsSection">
        {products.map((p) => {
          if (p.shipping.free_shipping)
            return (
              <ProductCard
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
