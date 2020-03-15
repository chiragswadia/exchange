import React from "react";
import { cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";
import DestinationCurrency from "../";

beforeEach(cleanup);

const wallet = {
    EUR: 100,
    USD: 200,
    GBP: 300,
}

describe("DestinationCurrency", () => {
    test("Snapshot should match #1", () => {
        const onChange = jest.fn();

        expect(
            renderer.create(
                <DestinationCurrency
                    wallet={wallet}
                    destinationCurrency="GBP"
                    onChange={onChange}
                />
            ).toJSON()
        ).toMatchSnapshot();
    });

    test("Snapshot should match #2", () => {
        const onChange = jest.fn();

        expect(
            renderer.create(
                <DestinationCurrency
                    wallet={wallet}
                    destinationCurrency="EUR"
                    onChange={onChange}
                />
            ).toJSON()
        ).toMatchSnapshot();
    });
});
