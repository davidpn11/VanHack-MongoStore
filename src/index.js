import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'utils/reducers'
import 'scss/index.css'
import tachyons from 'tachyons'
import Root from './containers/Root'
import registerServiceWorker from 'registerServiceWorker'

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Root />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
