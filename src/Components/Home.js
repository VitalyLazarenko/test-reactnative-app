import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {
  state = {};

  render() {
    return <Text>About Developer: Vitaly Lazarenko</Text>;
  }
}

const mapStateToProps = state => {
  return {test: state.test};
};

export default connect(mapStateToProps)(Home);
