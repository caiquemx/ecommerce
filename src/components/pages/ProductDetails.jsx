import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {getDetails} from '../../utils/api';

import '../../styles/productDetails.css';

export default function ProductDetails(props) {
  const {id} = useParams();
  const [details, setDetails] = useState();
  // const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const data = await getDetails(id);
      setDetails(data);
    };
    fetch();
  }, []);

  // const handleButtonClick = ({target: {id}}) => {
  //   if (id === 'minus') {
  //     if (itemQuantity == 0) return;
  //     setItemQuantity((prev) => prev - 1);
  //   }
  //   if (id === 'plus') {
  //     if (itemQuantity >= 500) return;
  //     setItemQuantity((prev) => {
  //       return prev + 1;
  //     });
  //   }
  // };

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
              <h1 className="producttTitle">{details.title}</h1>
              <p className="oldPrice">{`R$ ${details.price.toFixed(2)}`}</p>
              <p className="detailsPrice">{`R$ ${(details.price - details.price * 0.1).toFixed(
                2
              )}`}</p>
              <button className="addToCart">ADD TO CART</button>
            </div>
            {/* <div className="itemsQuantity">
              <button
                id="minus"
                onClick={handleButtonClick}
                type="button"
              >
                {' '}
                -{' '}
              </button>
              <p>{itemQuantity}</p>
              <button
                id="plus"
                onClick={handleButtonClick}
                type="button"
              >
                {' '}
                +{' '}
              </button>
            </div> */}
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
