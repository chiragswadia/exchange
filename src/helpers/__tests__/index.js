import { cleanup } from "@testing-library/react";
import { calculateExchangeRate } from '../';

beforeEach(cleanup);

const rates = {
    EUR: 1,
    USD: 1.11,
    GBP: 0.89,
}

describe('Test for common helpers', () => {
    test('calculateExchangeRate works as expected for EUR/USD', () => {
        const requetObject = {
            sourceCurrency: 'EUR',
            destinationCurrency: 'USD',
            rates,
        }
        expect(calculateExchangeRate(requetObject)).toBe(rates.USD / rates.EUR);
    });

    test('calculateExchangeRate works as expected for USD/GBP', () => {
        const requetObject = {
            sourceCurrency: 'USD',
            destinationCurrency: 'GBP',
            rates,
        }
        expect(calculateExchangeRate(requetObject)).toBe(rates.GBP / rates.USD);
    });
})