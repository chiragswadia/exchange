import React from "react";
import { render, cleanup } from "@testing-library/react";
import LiveRate from "../";
import { currencySymbolsByName } from '../../../constants';

beforeEach(cleanup);

const rates = {
    EUR: 1,
    USD: 1.11,
    GBP: 0.89,
};

describe("LiveRate", () => {
    test("Shows correct live rate for USD/EUR", () => {
        const rate = rates.EUR / rates.USD;
        const { getByTestId } = render(<LiveRate sourceCurrency="USD" destinationCurrency="EUR" rate={rate} />);

        expect(getByTestId('live-rate').textContent).toBe(`${currencySymbolsByName.USD} 1 = ${currencySymbolsByName.EUR} ${rate.toFixed(2)}`)
    });

    test("Shows correct live rate for EUR/GBP", () => {
        const rate = rates.GBP / rates.EUR;
        const { getByTestId } = render(<LiveRate sourceCurrency="EUR" destinationCurrency="GBP" rate={rate} />);

        expect(getByTestId('live-rate').textContent).toBe(`${currencySymbolsByName.EUR} 1 = ${currencySymbolsByName.GBP} ${rate.toFixed(2)}`)
    });
});
