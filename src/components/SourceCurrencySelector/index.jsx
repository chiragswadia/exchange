import React from 'react'
import cns from 'classnames'
import PropTypes from 'prop-types'
import { NotificationManager } from 'react-notifications'
import CurrencySelector from '../CurrencySelector'

import cn from './styles.module.css'

const SourceCurrencySelector = props => {
  const { amount } = props;
  const [inputAmount, setInputAmount] = React.useState(amount);
  
  React.useEffect(()=>{
    setInputAmount(amount);
  }, [amount]);

  const handleCurrencySelect = sourceCurrency => {
    const { onChange } = props
    onChange(sourceCurrency)
  }

  const isValidNumberWithTwoDecimalPlaces = inputAmount => {
    const regex = new RegExp(/^\d*\.?\d{0,2}$/)
    return regex.test(inputAmount)
  }

  const handleAmountChange = event => {
    const { onInput } = props
    let inputAmount = event.target.value

    if (!isValidNumberWithTwoDecimalPlaces(inputAmount)) {
      return
    }

    if (inputAmount > wallet[sourceCurrency]) {
      inputAmount = wallet[sourceCurrency].toFixed(2)
      NotificationManager.info(
        `Your maximum available wallet balance is ${sourceCurrency} ${inputAmount}`,
        '',
        3000
      )
    }

    setInputAmount(inputAmount)
    onInput(inputAmount)
  }

  const { sourceCurrency, wallet } = props
  const currencies = Object.keys(wallet)

  return (
    <div className={cn.root}>
      <CurrencySelector
        wallet={wallet}
        currencies={currencies}
        selectedCurrency={sourceCurrency}
        onChange={handleCurrencySelect}
      />

      <div
        className={cns(cn.amountInputContainer, {
          [cn.inputWithMinusSign]: inputAmount,
        })}
      >
        <input
          autoFocus
          type="text"
          className={cn.amountInput}
          value={inputAmount === 0 ? '': inputAmount}
          onChange={handleAmountChange}
          data-testid="amount-input"
        />
      </div>
    </div>
  )
}

SourceCurrencySelector.propTypes = {
  wallet: PropTypes.object.isRequired,
  amount: PropTypes.any.isRequired,
  sourceCurrency: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SourceCurrencySelector
