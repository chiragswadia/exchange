import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import CurrencySelector from '../CurrencySelector';

import cn from './styles.module.css';

const DestinationCurrency = props => {
    const onCurrencySelect = destinationCurrency => {
        const { onChange } = props;
        onChange(destinationCurrency);
    };

    const renderAmount = () => {
        const { amount, rate } = props;
        if(!amount || !rate){
          return null;
        }
        const value = (amount * rate).toFixed(2);
    
        return (
          <div className={cns(cn.value, {[cn.valueLong]: value.length > 7})}>
            { value }
          </div>
        );
    }

    const { destinationCurrency, wallet } = props;
    const currencies = Object.keys(wallet);

    return (
        <div className={cn.root}>
            <CurrencySelector
                wallet={wallet}
                selectedCurrency={destinationCurrency}
                currencies={currencies}
                onChange={onCurrencySelect}
            />
            <div className={cn.amount}>
                { renderAmount() }
            </div>
        </div>
    );
}

DestinationCurrency.propTypes = {
    sourceCurrency: PropTypes.string.isRequired,
    destinationCurrency: PropTypes.string.isRequired,
    wallet: PropTypes.object.isRequired,
    amount: PropTypes.number,
    rate: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default DestinationCurrency;
