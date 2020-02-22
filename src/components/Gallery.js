import {SafeAreaView, ScrollView, StyleSheet, Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getPhotosThunk} from './../store/thunks';
import store from './../store';

class Gallery extends Component {
  state = {};

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    store.dispatch(getPhotosThunk());
  }

  render() {
    return (
      <View>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Gallery Page</Text>
                {this.props.loading && (
                  <Image
                    style={{width: 150, height: 100}}
                    source={{uri: 'https://99px.ru/sstorage/86/2017/01/image_861701171351153465139.gif'}}
                  />
                )}
                <Image
                  style={{width: 150, height: 100}}
                  source={{uri: 'https://99px.ru/sstorage/86/2017/01/image_861701171351153465139.gif'}}
                />
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
  preloader: {},
  sectionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
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
});
