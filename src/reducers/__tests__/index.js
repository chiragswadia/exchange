import { cleanup } from "@testing-library/react"
import formReducer from "../formReducer";
import ratesReducer from "../ratesReducer";
import walletReducer from "../walletReducer";
import { actionTypes  } from '../../constants'

beforeEach(cleanup);

describe("formReducer", () => {
    test("Returns new state as expected", () =>{
        const state = {
            sourceCurrency: 'EUR',
            destinationCurrency: 'GBP',
            amount: 0,
        };
        const action = {
            type: actionTypes.CHANGE_FORM,
            payload : {
                amount: 100,
            }
        }
        expect(formReducer(state, action)).toStrictEqual({
            sourceCurrency: 'EUR',
            destinationCurrency: 'GBP',
            amount: 100,
        });
    });

    test("Returns same state if incorrect action is passed", () =>{
        const state = {
            sourceCurrency: 'EUR',
            destinationCurrency: 'GBP',
            amount: 0,
        };
        const action = {
            type: 'SOME_ACTION',
            payload : {
                amount: 100,
            }
        }
        expect(formReducer(state, action)).toStrictEqual({
            sourceCurrency: 'EUR',
            destinationCurrency: 'GBP',
            amount: 0,
        });
    });
});

describe("ratesReducer", () => {
    test("Returns new state as expected", () =>{
        const state = {
           EUR: 1,
        };
        const action = {
            type: actionTypes.UPDATE_RATE,
            payload : {
                EUR: 1,
                GBP: 0.89,
                USD: 1.11,
            }
        }
        expect(ratesReducer(state, action)).toStrictEqual({
           EUR: 1,
           GBP: 0.89,
           USD: 1.11,
        });
    });

    test("Returns same state if incorrect action is passed", () =>{
        const state = {
            EUR: 1,
         };
        const action = {
            type: 'SOME_ACTION',
            payload : {
                USD: 1.1,
            }
        }
        expect(ratesReducer(state, action)).toStrictEqual({
            EUR: 1,
        });
    });
});

describe("walletReducer", () => {
    test("Returns new state as expected", () => {
        const state = {
            EUR: 500,
            GBP: 800,
            USD: 600,
        };
        const action = {
            type: actionTypes.TRANSACTION,
            payload : {
                sourceCurrency: "EUR",
                destinationCurrency: "GBP",
                amount: 100,
                rate: 0.89,
            }
        }
        expect(walletReducer(state, action)).toStrictEqual({
           EUR: 400,
           GBP: 889,
           USD: 600
        });
    });

    test("Returns same state if incorrect action is passed", () =>{
        const state = {
            EUR: 500,
            GBP: 800,
            USD: 600,
        };
        const action = {
            type: 'SOME_ACTION',
            payload : {
                sourceCurrency: "EUR",
                destinationCurrency: "GBP",
                amount: 100,
                rate: 0.89,
            }
        }
        expect(walletReducer(state, action)).toStrictEqual({
            EUR: 500,
            GBP: 800,
            USD: 600,
        });
    });
});