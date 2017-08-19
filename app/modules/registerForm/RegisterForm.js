import React, { PureComponent as Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements'
import { TextInput, validator } from 'modules/form';
import { Field } from 'redux-form';


export default class RegisterForm extends Component {
  render() {
    return (
      <View>
        <View>
          <Text h1>Register</Text>
        </View>
        <View style={{paddingVertical: 30}}>
          <Field component={TextInput} name="email" placeholder="iloverego@afusion.com" label="Email" validate={validator.required} />
          <Field component={TextInput} name="password" placeholder="at least 6 words" label="Password" validate={validator.required} secureTextEntry />
        </View>
        <View>
          <Button raised icon={{name: 'send'}} backgroundColor="#795548" title='Create Account' onPress={this.props.onSubmit} disabled={this.props.invalid} />
        </View>
      </View>
    )
  }
}
