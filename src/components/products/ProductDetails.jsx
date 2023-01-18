import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {getDetails} from '../../utils/api';

export default function ProductDetails(props) {
  const {id} = useParams();
  const [details, setDetails] = useState();
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const data = await getDetails(id);
      console.log(data);
      setDetails(data);
    };
    fetch();
  }, []);

  const handleButtonClick = ({target: {id}}) => {
    if (id === 'minus') {
      if (itemQuantity == 0) return;
      setItemQuantity((prev) => prev - 1);
    }
    if (id === 'plus') {
      if (itemQuantity >= 500) return;
      setItemQuantity((prev) => {
        return prev + 1;
      });
    }
  };

  return (
    <div>
      {details && (
        <>
          <section className="mainSectionPD">
            <h2>{details.title}</h2>
            <img
              src={details.thumbnail}
              alt={details.title}
            />
            <p>{`FROM: ${details.price.toFixed(2)} R$`}</p>
            <p>{`TO: ${(details.price - details.price * 0.1).toFixed(2)} R$`}</p>
            <p>ADD TO CART</p>
            <p>KEEP BUYING</p>
            <p>{`AVAILABLE: ${details.available_quantity}`}</p>
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
