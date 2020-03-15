import { actionTypes } from '../constants'

/*
Dummy wallet state. In real world application this will be initialized to 0 and fetched via backend API through actions
*/
export const initialState = {
  EUR: 500.42,
  GBP: 800.47,
  USD: 600,
}

const wallerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TRANSACTION: {
      const {
        sourceCurrency,
        destinationCurrency,
        amount,
        rate,
      } = action.payload

      return {
        ...state,
        [sourceCurrency]: state[sourceCurrency] - amount,
        [destinationCurrency]: state[destinationCurrency] + amount * rate,
      }
    }

    default:
      return state
  }
}

export default wallerReducer
