import React from 'react'
import { render, cleanup } from '@testing-library/react'
import WalletBalance from '../'

beforeEach(cleanup)

describe('WalletBalance', () => {
  test('Shows correct wallet balance for USD', () => {
    const { getByTestId } = render(<WalletBalance currency="USD" value={200} />)

    expect(getByTestId('wallet-balance').textContent).toBe('You have $ 200.00')
  })

  test('Shows correct wallet balance for GBP', () => {
    const { getByTestId } = render(
      <WalletBalance currency="GBP" value={300.42} />
    )

    expect(getByTestId('wallet-balance').textContent).toBe('You have £ 300.42')
  })
})
