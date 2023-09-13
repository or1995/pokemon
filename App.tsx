/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {TabNavigation} from './tabNavigations/tabNavigation';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
