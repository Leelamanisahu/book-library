import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header'
import { Provider } from 'react-redux'
import appStore from './redux/store'

const App = () => {
  return (
    <Provider store={appStore}>
    <Header/>
    <Outlet/>
    </Provider>
  )
}

export default App