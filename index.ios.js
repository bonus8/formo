import React, { PureComponent as Component } from 'react';
import App from './app/App';
import { AppRegistry } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';


export default class Formo extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('formo', () => Formo);
