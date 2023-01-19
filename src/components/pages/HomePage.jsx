import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {getCategories, getProducts, getProductsByCategories} from '../../utils/api';
import ProductCard from '../cards/ProductCard';
import '../../styles/homePage.css';

export default function HomePage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [shipping, setShipping] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [searchError, setSearchError] = useState(false);

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

  const handleSearchClick = async () => {
    const data = await getProducts(undefined, searchValue);
    if (data.length > 0) {
      setShipping(false);
      setSearchError(false);
      setProducts(data);
    } else {
      setSearchError(true);
    }
  };

  return (
    <main>
      <header className="header">
        <input
          className="searchInput"
          id="searchInput"
          name="searchInput"
          onChange={({target}) => setSearchValue(target.value)}
          type="text"
          value={searchValue}
        />
        <button
          className="searchButton"
          onClick={handleSearchClick}
          type="submit"
        >
          SEARCH
        </button>
        <button
          className="cartButton"
          onClick={() => navigate('/cart')}
          type="button"
        >
          CART
        </button>
        {searchError && <span className="searchError">Products not found</span>}
      </header>
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
