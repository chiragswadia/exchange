import React from "react";
import SourceCurencySelector from "../SourceCurrencySelector";
import DestinationCurrency from "../DestinationCurrency";

import cn from './styles.module.css';

function Exchange() {
    const handleCurrencyExchange = e => {
        e.preventDefault();
        console.log('handleCurrencyExchange')
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
      <div className={cn.root}>
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
        <SourceCurencySelector
            wallet={wallet}
            amount={amount}
            sourceCurrency={sourceCurrency}
            // onChange={this.handleCurrencyFromChange}
            // onInput={this.handleAmountChange}
          />
          <DestinationCurrency
            sourceCurrency={sourceCurrency}
            destinationCurrency={destinationCurrency}
            inProgress={false}
            wallet={wallet}
            amount={amount}
            rate={rate}
            // onChange={this.handleCurrencyToChange}
          />
        </div>
      </form>
      </div>
    )
}

export default Exchange;