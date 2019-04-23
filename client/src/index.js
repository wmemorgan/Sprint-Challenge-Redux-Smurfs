import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/DesignComponents/GlobalStyle'
import theme from './components/DesignComponents/theme'

import reducer from './reducers'

import App from './components/App'

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Provider store={store}>
    <Router>
        <GlobalStyle />
      <App />
    </Router>
  </Provider>
    </ThemeProvider>,
  document.getElementById('root')
);
