import React from 'react';
import PropTypes from 'prop-types';

function Drink(props) {

  const drinkInfo =
    <div>
      <style jsx>
        {`
        .pintInfo {
          padding: 10px 40px;
          background-color: rgba(222, 127, 33, .9);
          max-width: 50%;
          margin: auto;
          margin-top: 100px;
        }
      `}
      </style>
      <div className="pintInfo">
        <div>
          <p>{props.name}</p>
          <p>Brewery: {props.brand}</p>
          <p>Price: {props.price}</p>
          <p>Alcohol Content: {props.alcoholContent}%</p>
          <p>Pints Remaining: {props.pintsRemaining}</p>
        </div>
      </div>
    </div>;

  return (
    <div className="pintInfo">
      {drinkInfo}
    </div>);
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.number.isRequired
};

export default Drink;
