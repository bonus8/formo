import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-native';
import { View, Text } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


export default class Tabbar extends Component {
  render() {
    return (
      <View style={styles.nav}>
        <Link style={styles.navItem} to="/" underlayColor="#f0f4f7">
          <Ionicon name="ios-search" size={30} />
        </Link>
        <Link style={styles.navItem} to="/login" underlayColor="#f0f4f7">
          <SimpleLineIcons name="user" size={25} />
        </Link>
        <Link style={styles.navItem} to="/register" underlayColor="#f0f4f7">
          <SimpleLineIcons name="user" size={25} />
        </Link>
      </View>
    )
  }
}


const styles = {
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  }
};
