import React, { PureComponent as Component } from 'react';
import { View, Text } from 'react-native';
import { RegisterForm } from 'modules/registerForm';
import inject from './inject';


class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.isSucceeded) {
      return (
        <View>
          <Text>Your account has been created successfully!</Text>
        </View>
      )
    }
    return (
      <View>
        <RegisterForm {...this.props} />
      </View>
    )
  }
}

export default inject(Register);
