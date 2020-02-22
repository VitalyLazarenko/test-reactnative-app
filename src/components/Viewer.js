import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class Viewer extends Component {
  state = {};

  render() {
    return <Text>Viewer Page</Text>;
  }
}

const mapStateToProps = state => {
  return {test: state.test};
};

export default connect(mapStateToProps)(Viewer);
