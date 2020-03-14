import React from 'react';
import PropTypes from 'prop-types';
import { NotificationManager } from "react-notifications";
import CurrencySelector from '../CurrencySelector';

import cn from './styles.module.css';

function SourceCurrencySelector(props) {
    const [amount, setAmount] = React.useState('');
    const inputRef = React.createRef();

    const handleCurrencySelect = sourceCurrency => {
      const { onChange } = props;
      onChange(sourceCurrency);
    };

    const isValidNumberWithTwoDecimalPlaces = amount => {
      const regex = new RegExp(/^\d*\.?\d{0,2}$/);
      return regex.test(amount);
    }

    const handleAmountChange = event => {
        const { onInput } = props;
        let amount = event.target.value;

        if(!isValidNumberWithTwoDecimalPlaces(amount)) {
          return;
        }

        if( amount > wallet[sourceCurrency] ) {
          amount = wallet[sourceCurrency];
          NotificationManager.info(`Your maximum available wallet balance is ${sourceCurrency} ${wallet[sourceCurrency]}`, '', 3000);
        }

        setAmount(amount);
        onInput(parseFloat(amount));
    };

    const { sourceCurrency, wallet } = props;
    const currencies = Object.keys(wallet);

    return (
      <div className={cn.root}>
        <CurrencySelector
          wallet={wallet}
          currencies={currencies}
          selectedCurrency={sourceCurrency}
          onChange={handleCurrencySelect}
        />
        
        <input
          autoFocus
          type="text"
          className={cn.amountInput}
          value={amount}
          ref={inputRef}
          onChange={handleAmountChange}
        />
      </div>
    );

}

SourceCurrencySelector.propTypes = {
    wallet: PropTypes.object.isRequired,
    amount: PropTypes.number.isRequired,
    sourceCurrency: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default SourceCurrencySelector;
