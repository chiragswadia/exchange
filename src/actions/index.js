import axios from "axios";
import { NotificationManager } from "react-notifications";
import { actionTypes } from '../constants';
import { calculateExchangeRate } from '../helpers';

const apiRoute = 'https://api.exchangeratesapi.io/latest?symbols=USD,GBP';

export const changeForm = payload => ({
    type: actionTypes.CHANGE_FORM,
    payload
});

export const fetchAndUpdateRates = () => async dispatch => {
    try {
        const ratesResponse = await axios.get(apiRoute);
        dispatch({
            type: actionTypes.UPDATE_RATE,
            payload: ratesResponse.data.rates,
        });
    } catch (error) {
        console.error(error);
    }
};

export const performTransaction = () => (dispatch, getState) => {
    try {
        const state = getState();
        const { form, rates } = state;
        const { sourceCurrency, destinationCurrency, amount } = form;
        const rate = calculateExchangeRate({ sourceCurrency, destinationCurrency, rates });
    
        dispatch({
            type: actionTypes.TRANSACTION,
            payload: {
                sourceCurrency,
                destinationCurrency,
                amount,
                rate,
            },
        });

        NotificationManager.success('Transaction Successfull', 'Success', 5000);
    } catch(error) {
        console.error(error);
        NotificationManager.error('Error while performing transaction', 'Error', 5000);
    }
  };