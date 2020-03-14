import { actionTypes } from '../constants';

export const initialState = {
  sourceCurrency: 'EUR',
  destinationCurrency: 'GBP',
  amount: 0,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_FORM: {
      return { ...state, ...action.payload }
    }

    default:
      return state;
  }
}

export default formReducer;
