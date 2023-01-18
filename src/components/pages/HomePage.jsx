import React, {useEffect, useState} from 'react';

import getCategories from '../../utils/api';
import '../../styles/homePage.css';

export default function HomePage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getCategories();
      setCategories(data);
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
    </main>
  );
}
