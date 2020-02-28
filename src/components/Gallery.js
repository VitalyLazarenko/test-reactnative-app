import {SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {getPhotosThunk} from './../store/thunks';
import store from './../store';
import ImageItem from './ImageItem';
import Viewer from './Viewer';

class Gallery extends Component {
  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    store.dispatch(getPhotosThunk());
  }

  onPressHandler() {
    console.log(123);
  }

  render() {
    return (
      <View>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                {this.props.loading && (
                  <View style={styles.preloaderContainer}>
                    <Image
                      style={styles.preloader}
                      source={{uri: 'https://99px.ru/sstorage/86/2017/01/image_861701171351153465139.gif'}}
                    />
                  </View>
                )}
                <View style={styles.galleryContainer}>
                  {(this.props.photos || []).map(x => (
                    <TouchableOpacity key={x.id} onPress={() => this.props.navigation.navigate('Viewer')}>
                      <ImageItem source={{uri: x.urls.small}} userName={x.user.name} />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {photos: state.app.photos, loading: state.app.loading};
};

export default connect(mapStateToProps)(Gallery);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  preloaderContainer: {
    margin: '85%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  preloader: {
    width: 150,
    height: 100,
  },
  sectionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 24,
    backgroundColor: '#e7dfdd',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  galleryContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
