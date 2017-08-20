import React, { PureComponent as Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements'
import { TextInput, validator } from 'modules/form';
import { Field } from 'redux-form';


export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <View>
          <Text h1>Login</Text>
        </View>
        <View style={{paddingVertical: 30}}>
          {
            this.props.main.user.isLogin
            ?
            <Button raised icon={{name: 'send'}} backgroundColor="#4CAF50" title='SignOut' onPress={this.props.onSignOut} />
            :
            <View>
              <Field component={TextInput} name="email" placeholder="iloverego@afusion.com" label="Email" validate={validator.required} />
              <Field component={TextInput} name="password" placeholder="at least 6 words" label="Password" validate={validator.required} secureTextEntry />
              <View style={{paddingTop: 30}}>
                <Button raised icon={{name: 'send'}} backgroundColor="#FFC107" title='Login' onPress={this.props.onSubmit} disabled={this.props.invalid} />
              </View>
            </View>
          }
        </View>
      </View>
    )
  }
}
