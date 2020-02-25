import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Home extends Component {
  state = {};

  render() {
    return (
      <View style={styles.aboutContainer}>
        <Text style={styles.mainText}>About Developer: Vitaly Lazarenko</Text>
        <Text style={styles.sectionDescription}>Welcome to the Test Application.</Text>
        <View style={styles.btnContainer}>
          <Button title="Run Gallery App" onPress={() => this.props.navigation.navigate('Gallery')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 24,
    fontWeight: '600',
  },
  aboutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7dfdd',
  },
  btnContainer: {
    marginTop: '5%',
  },
});
