import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Gallery from './Gallery';
import Viewer from './Viewer';
import store from './../store';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Gallery" component={Gallery} />
            <Stack.Screen name="Viewer" component={Viewer} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
