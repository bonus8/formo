import { createStore, applyMiddleware } from 'redux'
import Reactotron from 'reactotron-react-native'
import { createLogger } from 'redux-logger'
import reducer from 'reducer'

let store

if (process.env.NODE_ENV === 'production') {
  store = createStore(reducer)
} else {
  store = Reactotron.createStore(reducer, applyMiddleware(createLogger()))
}

export default store
