import React, {useEffect, useState} from 'react';

import {getCategories, getProducts, getProductsByCategories} from '../../utils/api';
import ProductCard from '../cards/ProductCard';
import '../../styles/homePage.css';

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [shipping, setShipping] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const data = await getCategories();
      const data1 = await getProducts();
      setCategories(data);
      setProducts(data1);
    };
    fetch();
  }, []);

  const handleCategoriesClick = async ({target}) => {
    const data = await getProductsByCategories(target.id);
    setShipping(false);
    setProducts(data);
  };

  const handleSearchClick = async ({}) => {
    const data = await getProducts(undefined, searchValue);
    setProducts(data);
  };

  return (
    <main>
      <section className="inputSection">
        <input
          className="searchInput"
          id="searchInput"
          name="searchInput"
          onChange={({target}) => setSearchValue(target.value)}
          type="text"
          value={searchValue}
        />
        <button
          type="submit"
          onClick={handleSearchClick}
        >
          SEARCH
        </button>
      </section>
      <section className="categoriesSection">
        <div className="categories">
          {categories.map(({id, name}) => (
            <label htmlFor={id}>
              <p
                id={id}
                onClick={handleCategoriesClick}
                key={id}
              >
                {name}
              </p>
            </label>
          ))}
        </div>
      </section>
      <section className="ProductsSection">
        {products.map((p) => {
          if (shipping) {
            if (p.shipping.free_shipping)
              return (
                <ProductCard
                  price={p.price}
                  shipping={p.shipping.free_shipping}
                  thumb={p.thumbnail}
                  title={p.title}
                />
              );
          }
          if (!shipping)
            return (
              <ProductCard
                notFirst={true}
                price={p.price}
                shipping={p.shipping.free_shipping}
                thumb={p.thumbnail}
                title={p.title}
              />
            );
        })}
      </section>
    </main>
  );
}
