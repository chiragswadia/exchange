import React from "react";
import { cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";
import Exchange from "../";

beforeEach(cleanup);

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(fn => fn({
        wallet: {
            EUR: 100,
            GBP: 200,
            USD: 200,
        },
        rates: {
            EUR: 1,
            USD: 1.11,
            GBP: 0.89,
        },
        form: {
            amount: 50,
            sourceCurrency: "EUR",
            destinationCurrency: "GBP",
        }
    })),
}));

describe("Exchange", () => {
    test("Snapshot should match", () => {
        expect(
            renderer.create(
                <Exchange />
            ).toJSON()
        ).toMatchSnapshot();
    });
});
