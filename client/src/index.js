import 'materialize-css/dist/css/materialize.min.css' // need .css in js file
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

// for Dev usage
import axios from 'axios'
window.axios = axios


const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
 )

//  console.log('stripe key: ', process.env.REACT_APP_STRIPE_KEY)
//  console.log('environment is: ', process.env.NODE_ENV)