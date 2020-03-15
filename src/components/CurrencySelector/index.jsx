import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import WalletBalance from '../WalletBalance';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import cn from './styles.module.css';

const CurrencySelector = ({ wallet, currencies, selectedCurrency, onChange }) => {
  const handleOnChange = index => {
    onChange(currencies[index]);
  }

  return (
    <div className={cn.root}>
        <Carousel
          infiniteLoop
          selectedItem={currencies.indexOf(selectedCurrency)}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          emulateTouch={true}
          onChange={handleOnChange}
        >
          { currencies.map(currency =>
            <WalletBalance key={currency} currency={currency} value={wallet[currency]}/>
          )}
        </Carousel>
      </div>
  )

}

CurrencySelector.propTypes = {
  wallet: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default CurrencySelector;
