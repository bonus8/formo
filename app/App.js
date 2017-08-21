import '../ReactotronConfig' // import at line 1
import React, { PureComponent as Component } from 'react'
import { Provider } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { Main } from 'modules/main'
import store from 'store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
