import React from 'react';
import PropTypes from 'prop-types';
import FormattedCurrency from '../FormattedCurrency/';

import cn from './styles.module.css';

const WalletBalance = React.memo(
  ({ currency, value }) => {
  return (
    <div className={cn.root}>
        <div className={cn.currency}>
          { currency }
        </div>
        <div className={cn.walletBalance} data-testid="wallet-balance">
          You have {' '}
          <FormattedCurrency currency={currency} value={value}/>
        </div>
      </div>
  )
})

WalletBalance.propTypes = {
  currency: PropTypes.string,
  value: PropTypes.number,
}

export default WalletBalance;
