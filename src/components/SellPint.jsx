import React from 'react';
import PropTypes from 'prop-types';

function SellPint(props){

  return(
    <div>
      <p>{props.pintsRemaining}</p>
      <button onClick={props.onSellPint}>Sell Pint</button>
    </div>
  );
}
SellPint.propTypes = {
  pintsRemaining: PropTypes.number.isRequired,
  onSellPint: PropTypes.func.isRequired
};
export default SellPint;
