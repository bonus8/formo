import React, { PureComponent as Component } from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { Home, Login, Register } from 'routes';
import { ScrollView, View } from 'react-native';
import Tabbar from './Tabbar';


export default class Main extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <ScrollView>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </ScrollView>
          <Tabbar />
        </View>
      </NativeRouter>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 15,
    backgroundColor: '#EFEBE9'
  }
};
