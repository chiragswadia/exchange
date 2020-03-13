import React from "react";

import cn from './styles.module.css';

function Exchange() {
    const handleCurrencyExchange = e => {
        e.preventDefault();
        console.log('handleCurrencyExchange')
    }

    return (
        <form
            className={cn.root}
            onSubmit={handleCurrencyExchange}
        >
        <div className={cn.header}>
            <button
              type="submit"
            >
                Exchange
            </button>
        </div>
      </form>
    )
}

export default Exchange;