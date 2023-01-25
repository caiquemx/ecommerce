import React, {useEffect, useState, useContext} from 'react';

import {getCategories, getProducts, getProductsByCategories} from '../../utils/api';
import ProductCard from '../cards/ProductCard';
import '../../styles/homePage.css';
import Header from '../Header';
import {appContext} from '../../context/appContext';

export default function HomePage() {
  const {searchValue, setSearchError} = useContext(appContext);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [shipping, setShipping] = useState(true);

  useEffect(() => {
    setSearchError(false);
    const fetch = async () => {
      const data = await getCategories();
      const data1 = await getProducts(undefined, searchValue);
      if (data1.length <= 0) {
        setSearchError(true);
        data1 = await getProducts();
      }
      setCategories(data);
      setProducts(data1);
    };
    fetch();
  }, [searchValue]);

  const handleCategoriesClick = async ({target}) => {
    setSearchError(false);
    const data = await getProductsByCategories(target.id);
    setShipping(false);
    setProducts(data);
  };

  return (
    <main>
      <Header />
      <section className="categoriesSection">
        <div className="categories">
          {categories.map(({id, name}) => (
            <div
              className="categoryContainer"
              id={id}
              key={id}
              onClick={handleCategoriesClick}
            >
              {name}
            </div>
          ))}
        </div>
      </section>
      <section className="ProductsSection">
        {products.map((p) => {
          if (shipping) {
            if (p.shipping.free_shipping)
              return (
                <ProductCard
                  id={p.id}
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
                id={p.id}
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
