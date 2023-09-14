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
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './constants/colors';
import {TabNavigator} from './screens/TabNavigator/TabNavigator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <>
        <SafeAreaView style={styles.container}>
          {/*<LogoBar />*/}
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
});

export default App;
