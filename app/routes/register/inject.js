import React, { PureComponent as Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createUser } from 'modules/api';


export default OriginalComponent => {
  class Injector extends Component {

    state = {
      isSucceeded: false
    }

    handleSubmit = value => {
      createUser(value).then(res => {
        console.warn(res);
        this.setState({
          isSucceeded: true
        });
      });
    }

    render() {
      return <OriginalComponent onSubmit={this.props.handleSubmit(this.handleSubmit)} isSucceeded={this.state.isSucceeded} {...this.props} />;
    }
  }

  return reduxForm({
    form: 'register'
  })(Injector);
}
