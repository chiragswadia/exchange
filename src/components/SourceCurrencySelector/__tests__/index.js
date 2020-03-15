import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import SourceCurrencySelector from '../'

beforeEach(cleanup)

const wallet = {
  EUR: 100,
  USD: 200,
  GBP: 300,
}

describe('SourceCurrencySelector', () => {
  test('Input field works as expected for valid amount and sufficient wallet balance', () => {
    const onInput = jest.fn()
    const onChange = jest.fn()
    const { getByTestId } = render(
      <SourceCurrencySelector
        wallet={wallet}
        sourceCurrency="GBP"
        amount={0}
        onInput={onInput}
        onChange={onChange}
      />
    )

    fireEvent.change(getByTestId('amount-input'), { target: { value: 100.42 } })

    expect(getByTestId('amount-input').value).toBe('100.42')
  })

  test('Input field works as expected for valid amount and insufficient wallet balance', () => {
    const onInput = jest.fn()
    const onChange = jest.fn()
    const { getByTestId } = render(
      <SourceCurrencySelector
        wallet={wallet}
        sourceCurrency="GBP"
        amount={0}
        onInput={onInput}
        onChange={onChange}
      />
    )

    fireEvent.change(getByTestId('amount-input'), { target: { value: 9999 } })

    expect(getByTestId('amount-input').value).toBe(wallet.GBP.toString())
  })

  test('Input field works as expected for invalid amount ( more than 2 digits after decimal places )', () => {
    const onInput = jest.fn()
    const onChange = jest.fn()
    const { getByTestId } = render(
      <SourceCurrencySelector
        wallet={wallet}
        sourceCurrency="GBP"
        amount={0}
        onInput={onInput}
        onChange={onChange}
      />
    )

    fireEvent.change(getByTestId('amount-input'), { target: { value: 100.22 } })
    fireEvent.change(getByTestId('amount-input'), {
      target: { value: 100.223 },
    })

    expect(getByTestId('amount-input').value).toBe('100.22')
  })
})
