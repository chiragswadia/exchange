import { combineReducers } from 'redux'
import wallet from './walletReducer'
import rates from './ratesReducer'
import form from './formReducer'

const rootReducer = combineReducers({
  form,
  wallet,
  rates,
})

export default rootReducer
