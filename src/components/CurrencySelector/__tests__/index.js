import React from 'react'
import { cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import CurrencySelector from '../'

beforeEach(cleanup)

const wallet = {
  EUR: 100,
  USD: 200,
  GBP: 300,
}

const currencies = Object.keys(wallet)

describe('CurrencySelector', () => {
  test('Snapshot should match #1', () => {
    const onChange = jest.fn()

    expect(
      renderer
        .create(
          <CurrencySelector
            wallet={wallet}
            currencies={currencies}
            selectedCurrency="EUR"
            onChange={onChange}
          />
        )
        .toJSON()
    ).toMatchSnapshot()
  })

  test('Snapshot should match #2', () => {
    const onChange = jest.fn()

    expect(
      renderer
        .create(
          <CurrencySelector
            wallet={wallet}
            currencies={currencies}
            selectedCurrency="GBP"
            onChange={onChange}
          />
        )
        .toJSON()
    ).toMatchSnapshot()
  })
})
