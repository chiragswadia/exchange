import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NotificationContainer } from 'react-notifications'
import LiveRate from '../LiveRate'
import SourceCurrencySelector from '../SourceCurrencySelector'
import DestinationCurrency from '../DestinationCurrency'
import { calculateExchangeRate } from '../../helpers'
import * as actions from '../../actions'
import isValidTransaction from './utils/isValidTransaction'

import cn from './styles.module.css'

const RATE_UPDATE_INTERVAL = 10000

const Exchange = () => {
  const dispatch = useDispatch()
  const { wallet, rates, form } = useSelector(
    state => ({
      wallet: state.wallet,
      rates: state.rates,
      form: state.form,
    }),
    shallowEqual
  )
  const { amount, sourceCurrency, destinationCurrency } = form

  const exchangeRate = calculateExchangeRate({
    sourceCurrency,
    destinationCurrency,
    rates,
  })
  const isTransactionAllowed = isValidTransaction({
    sourceCurrency,
    destinationCurrency,
    wallet,
    amount,
    rates,
  })

  const performTransaction = event => {
    event.preventDefault()
    dispatch(actions.performTransaction())
  }

  const handleSourceCurrencyChange = sourceCurrency => {
    dispatch(actions.changeForm({ sourceCurrency }))
  }

  const handleDestinationCurrencyChange = destinationCurrency => {
    dispatch(actions.changeForm({ destinationCurrency }))
  }

  const handleAmountChange = amount => {
    dispatch(actions.changeForm({ amount }))
  }

  useEffect(() => {
    dispatch(actions.fetchAndUpdateRates())

    const rateUpdateIntervalId = setInterval(() => {
      dispatch(actions.fetchAndUpdateRates())
    }, RATE_UPDATE_INTERVAL)

    // Unmount
    return () => {
      clearInterval(rateUpdateIntervalId)
    }
  }, [dispatch])

  return (
    <form className={cn.root} onSubmit={performTransaction}>
      <NotificationContainer />
      <div className={cn.header}>
        <LiveRate
          sourceCurrency={sourceCurrency}
          destinationCurrency={destinationCurrency}
          rate={exchangeRate}
        />

        <button
          type="submit"
          disabled={!isTransactionAllowed}
          className={cn.button}
        >
          Exchange
        </button>
      </div>
      <div>
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
          wallet={wallet}
          amount={amount}
          rate={exchangeRate}
          onChange={handleDestinationCurrencyChange}
        />
      </div>
    </form>
  )
}

export default Exchange
