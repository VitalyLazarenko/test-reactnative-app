import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
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
                <Text style={styles.sectionTitle}>{this.props.loading}</Text>
                <Text style={styles.sectionDescription}>
                  Welcome to the Test Application for <Text style={styles.highlight}>Devsteam.mobi</Text>.
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const {photos, loading} = state;
  return {photoList: photos, loading};
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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
