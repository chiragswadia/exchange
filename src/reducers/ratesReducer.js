import { actionTypes } from '../constants'

export const initialState = {
  EUR: 1,
  USD: 1.1104, // TODO Remove while sending task
  GBP: 0.8907,
}

const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RATE: {
      return {
        ...state,
        ...action.payload,
      }
    }

    default:
      return state
  }
}

export default ratesReducer
