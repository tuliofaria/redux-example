import React, { Component } from 'react'
import './App.css'

import { Provider } from 'react-redux'

import Counter from './Counter'
import Header from './Header'
import IpAddress from './IpAddress'
import store from './redux'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Counter />
          <IpAddress />
        </div>
      </Provider>
    )
  }
}
export default App
