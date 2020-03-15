import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotificationContainer } from 'react-notifications'
import LiveRate from '../LiveRate'
import SourceCurrencySelector from '../SourceCurrencySelector'
import DestinationCurrency from '../DestinationCurrency'
import { calculateExchangeRate } from '../../helpers'
import * as actions from '../../actions'
import isValidTransaction from './utils/isValidTransaction'

import cn from './styles.module.css'

const RATE_UPDATE_INTERVAL = 600000 // TODO - Change this to 10000 before delivering

const Exchange = () => {
  const dispatch = useDispatch()
  const wallet = useSelector(state => state.wallet) // TODO - Maybe use memoized selectors for all if possible
  const rates = useSelector(state => state.rates)
  const amount = useSelector(state => state.form.amount)
  const sourceCurrency = useSelector(state => state.form.sourceCurrency)
  const destinationCurrency = useSelector(
    state => state.form.destinationCurrency
  )
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
