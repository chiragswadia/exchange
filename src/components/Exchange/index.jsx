import React from "react";
import SourceCurrencySelector from "../SourceCurrencySelector";
import DestinationCurrency from "../DestinationCurrency";

import cn from './styles.module.css';

function Exchange() {
    const handleCurrencyExchange = e => {
        e.preventDefault();
        console.log('handleCurrencyExchange')
    }

    const handleSourceCurrencyChange = () => {

    }

    const handleDestinationCurrencyChange = () => {

    }

    const handleAmountChange = () => {

    }

    const wallet = {
        EUR: 200.76,
        USD: 123.68,
        GBP: 300.54
    }

    const rate =  1.1104;

    const sourceCurrency = "EUR";
    const destinationCurrency = "GBP";
    const amount = '';

    return (
        <form
            className={cn.form}
            onSubmit={handleCurrencyExchange}
        >
        <div className={cn.header}>
            <button
              type="submit"
            >
                Exchange
            </button>
        </div>
        <div className={cn.main}>
        <SourceCurrencySelector
            wallet={wallet}
            amount={amount}
            sourceCurrency={sourceCurrency}
            onChange={handleSourceCurrencyChange}
            onInput={handleAmountChange}
          />
          <DestinationCurrency
            sourceCurrency={sourceCurrency}
            destinationCurrency={destinationCurrency}
            inProgress={false}
            wallet={wallet}
            amount={amount}
            rate={rate}
            onChange={handleDestinationCurrencyChange}
          />
        </div>
      </form>
    )
}

export default Exchange;