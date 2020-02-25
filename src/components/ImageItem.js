import {SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, Text, View} from 'react-native';
import React, {Component} from 'react';

export default class ImageItem extends Component {
  render() {
    return (
      <View style={styles.imageItemsContainer}>
        <Image style={styles.galleryItem} source={this.props.source}/>
        <View style={styles.imageItemTextContainer}>
          <Text style={styles.imageItemText}>{this.props.userName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  galleryItem: {
    width: 200,
    height: 200,
  },
  imageItemsContainer: {
    display: 'flex',
    alignContent: 'flex-start',
  },
  imageItemTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginTop: -50,
    width: 200,
    height: 50,
  },
  imageItemText: {
    color: '#fff',
  },
});
