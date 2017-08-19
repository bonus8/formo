import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'


export default class TextInput extends Component {
  static propTypes = {
    input: PropTypes.object.isRequired
  }

  render() {
    const { input, label, ...rest } = this.props;
    return (
      <View>
        { label && <FormLabel>{label}</FormLabel> }
        <FormInput
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          {...rest} />
      </View>
    )
  }
}
