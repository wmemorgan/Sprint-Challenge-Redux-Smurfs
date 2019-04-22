import React from 'react'

import AppContainer from './DesignComponents/AppStyles'
import Header from './SharedComponents/Header'
import Routes from './Routes'


const App = () => {
  return (
    <AppContainer>
      <Header />
      <Routes />
    </AppContainer>
  )
}

export default App;
