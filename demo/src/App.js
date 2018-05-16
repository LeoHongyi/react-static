import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Main from './components/Main'


class App extends Component {
  render() {
    return <Main />
  }
}

export default hot(module)(App)