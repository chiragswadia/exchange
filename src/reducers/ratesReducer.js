import { actionTypes } from '../constants'

export const initialState = {
  EUR: 1,
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
