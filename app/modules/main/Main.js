import React, { PureComponent as Component } from 'react';
import { connect } from 'react-redux';
import { observeSession } from 'modules/api';
import { setSession, clearSession } from './actions';
import { NativeRouter, Route } from 'react-router-native';
import { Home, Login, Register } from 'routes';
import { ScrollView, View } from 'react-native';
import Tabbar from './Tabbar';


class Main extends Component {
  componentWillMount() {
    this.props.observeSession();
  }

  enhance(OriginalComponent) {
    return () => <OriginalComponent main={this.props.main} />;
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <ScrollView>
            <Route exact path="/" component={this.enhance(Home)} />
            <Route exact path="/login" component={this.enhance(Login)} />
            <Route exact path="/register" component={this.enhance(Register)} />
          </ScrollView>
          <Tabbar isLogin={this.props.main.user.isLogin} />
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

export default connect(
  state => ({
    main: state.main
  }),
  dispatch => ({
    observeSession: () => {
      observeSession(user => {
        if(!user) {
          dispatch(clearSession());
          return;
        }
        dispatch(setSession(user));
      });
    }
  })
)(Main);
