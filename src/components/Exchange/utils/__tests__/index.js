import { cleanup } from '@testing-library/react'
import isValidTransaction from '../isValidTransaction'

beforeEach(cleanup)

const rates = {
  EUR: 1,
  USD: 1.11,
  GBP: 0.89,
}

const wallet = {
  EUR: 100,
  USD: 200,
  GBP: 300,
}

describe('isValidTransaction', () => {
  test('Transaction should not be valid if both the wallets are same', () => {
    const requestObject = {
      sourceCurrency: 'EUR',
      destinationCurrency: 'EUR',
    }
    expect(isValidTransaction(requestObject)).toBeFalsy()
  })

  test('Transaction should be valid if wallets are different and user has sufficient balance in source wallet', () => {
    const requestObject = {
      sourceCurrency: 'EUR',
      destinationCurrency: 'USD',
      rates,
      wallet,
      amount: 50,
    }
    expect(isValidTransaction(requestObject)).toBeTruthy()
  })

  test('Transaction should be invalid if user does not have sufficient balance in source wallet', () => {
    const requestObject = {
      sourceCurrency: 'EUR',
      destinationCurrency: 'USD',
      rates,
      wallet,
      amount: 150,
    }
    expect(isValidTransaction(requestObject)).toBeFalsy()
  })
})
