import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { initialState as walletState } from './reducers/walletReducer'
import { initialState as ratesState } from './reducers/ratesReducer'
import { initialState as formState } from './reducers/formReducer'

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  wallet: walletState,
  rates: ratesState,
  form: formState,
}

export default () => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
    )
  )
}
