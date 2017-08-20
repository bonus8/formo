import React, { PureComponent as Component } from 'react';
import { View, Text } from 'react-native';
import { LoginForm } from 'modules/loginForm';
import inject from './inject';


class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.isSucceeded) {
      return (
        <View>
          <Text>Welcome!!</Text>
        </View>
      )
    }
    return (
      <View>
        <LoginForm {...this.props} />
      </View>
    )
  }
}

export default inject(Login);
