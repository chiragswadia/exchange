import React from 'react'
import { render, cleanup } from '@testing-library/react'
import FormattedCurrency from '../'

beforeEach(cleanup)

describe('FormattedCurrency', () => {
  test('Shows formatted currency as expected for USD ( no precision )', () => {
    const { getByTestId } = render(
      <FormattedCurrency currency="USD" value={432.56} />
    )

    expect(getByTestId('formatted-currency').textContent).toBe('$ 432.56')
  })

  test('Shows formatted currency as expected for USD ( with precision )', () => {
    const { getByTestId } = render(
      <FormattedCurrency currency="USD" precision={3} value={432.567} />
    )

    expect(getByTestId('formatted-currency').textContent).toBe('$ 432.567')
  })

  test('Shows formatted currency as expected for EUR', () => {
    const { getByTestId } = render(
      <FormattedCurrency currency="EUR" value={900.88} />
    )

    expect(getByTestId('formatted-currency').textContent).toBe('€ 900.88')
  })
})
