import React from 'react';
import PropTypes from 'prop-types';

import SellPint from './SellPint';

class Drink extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pintsRemaining: 124
  //   };
  //   this.handleSellPint = this.handleSellPint.bind(this);
  // }
  // handleSellPint(){
  //   this.setState({pintsRemaining: 124});
  // }
  // sellPint(){
  //   let newPintsRemaining = this.state.pintsRemaining;
  //   newPintsRemaining -= 1;
  //   this.setState({pintsRemaining: newPintsRemaining})
  // }
  //

  render(){
    return (
      <div>
        <style jsx>
          {`
            .pintInfo {
              padding: 10px 40px;
              background-color: peru;
              max-width: 50%;
              margin: auto;
              margin-top: 100px;
              font-size: 1.1em;
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
            <div>
              <button onClick={sellPint}>Sell Pint</button>
            </div>
          </div>
        </div>
    )
  }

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.number.isRequired
};

export default Drink;
