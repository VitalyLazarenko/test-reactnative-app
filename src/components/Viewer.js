import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Viewer extends Component {
  state = {};

  render() {
    const {userName} = this.props.route.params;
    const {source} = this.props.route.params;
    return (
      <View style={styles.viewerContainer}>
        <Image style={styles.viewerImage} source={source} />
        <View style={styles.viewerTextContainer}>
          <Text style={styles.viewerText}>{userName}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {test: state.test};
};

export default connect(mapStateToProps)(Viewer);

const styles = StyleSheet.create({
  viewerContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(60, 60, 60, 0.8)',
  },
  viewerImage: {
    width: '85%',
    height: '85%',
  },
  viewerTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    marginTop: -58,
    width: '85%',
    height: '8%',
  },
  viewerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
