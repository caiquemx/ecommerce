import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {getDetails} from '../../utils/api';

import '../../styles/productDetails.css';

export default function ProductDetails(props) {
  const {id} = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    const fetch = async () => {
      const data = await getDetails(id);
      setDetails(data);
    };
    fetch();
  }, []);

  const handleButtonClick = ({target}) => {
    target.innerHTML = '✔️';
    const productToCart = {
      id,
      title: details.title,
      oldPrice: details.price.toFixed(2),
      price: (details.price - details.price * 0.1).toFixed(2),
      availability: details.available_quantity,
      thumb: details.thumbnail,
    };

    const innetText = () => {
      return (target.innerHTML = 'ADD TO CART');
    };

    setTimeout(innetText, 1000);

    localStorage.setItem(id, JSON.stringify(productToCart));
  };

  return (
    <div className="productDetails">
      {details && (
        <>
          <section className="mainSectionPD">
            <div className="productImg">
              <img
                src={details.thumbnail}
                alt={details.title}
              />
              <p className="productAvailability">{`AVAILABLE: ${details.available_quantity}`}</p>
            </div>
            <div className="productInfo">
              <h1 className="productTitle">{details.title}</h1>
              <p className="oldPrice">{`R$ ${details.price.toFixed(2)}`}</p>
              <p className="detailsPrice">{`R$ ${(details.price - details.price * 0.1).toFixed(
                2
              )}`}</p>
              <button
                className="addToCart"
                onClick={handleButtonClick}
                disabled={details.available_quantity <= 0 && true}
              >
                ADD TO CART
              </button>
            </div>
          </section>
          <section className="secondSectionPD">
            {details.attributes.map((a) => {
              return <p>{`${a.name}: ${a.value_name}`}</p>;
            })}
          </section>
        </>
      )}
    </div>
  );
}
