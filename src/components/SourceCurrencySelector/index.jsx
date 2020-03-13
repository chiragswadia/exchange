import React from 'react';
import PropTypes from 'prop-types';
import CurrencySelector from '../CurrencySelector';

import cn from './styles.module.css';

function SourceCurrencySelector(props) {
    const [amount, setAmount] = React.useState('');
    const inputRef = React.createRef();

    const handleCurrencySelect = sourceCurrency => {
        const { onChange } = props;
        
        if (onChange) {
          onChange(sourceCurrency);
        }
    };

    const onAmountInput = event => {
        const { onInput } = props;
        const amount = event.target.value;
    
        const parsedAmount = new Number(amount);
        setAmount(parsedAmount);
    
        if (parsedAmount && onInput) {
          onInput(parsedAmount);
        }
    
        if (amount === '' && onInput) {
          onInput(0);
        }
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
          type="number"
          className={cn.amountInput}
          value={amount}
          ref={inputRef}
          onChange={onAmountInput}
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
