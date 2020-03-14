import { useDispatch, useSelector } from 'react-redux'
import { actionTypes } from '../constants';

const apiRoute = 'https://api.exchangeratesapi.io/latest';

export const changeForm = payload => ({
    type: actionTypes.CHANGE_FORM,
    payload
});

export const fetchAndUpdateRates = () => async () => {
    try {
        const dispatch = useDispatch();
        const ratesData = await fetch(apiRoute);
        dispatch({
            type: actions.RATES_UPDATE,
            payload: {
                rates: ratesData.data.rates,
            },
        });
    } catch (error) {
      console.log(error);
    }
};

export const performTransaction = () => {
    const dispatch = useDispatch();
    const form = useSelector(state=>state.form);
    const rates = useSelector(state=>state.rates);
    const { sourceCurrency, destinationCurrency, amount } = form;
    const rate = calculateRate({ sourceCurrency, destinationCurrency, rates });
  
    dispatch({
        type: actionTypes.TRANSACTION,
        payload: {
            sourceCurrency,
            destinationCurrency,
            amount,
            rate,
        },
    });
  };