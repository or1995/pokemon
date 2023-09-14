import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {screens} from '../../constants/routes';
import {NavigationBar} from '../../components/navigationBar/navigationBar';
import {CardsNavigator} from './CardsNavigator';
import {SetsNavigator} from './SetsNavigator';
import {SeriesNavigator} from './SeriesNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {position: 'absolute'},
      }}
      tabBar={props => (
        <NavigationBar navigation={props.navigation} state={props.state} />
      )}>
      <Tab.Screen name={screens.ALL_CARDS} component={CardsNavigator} />
      <Tab.Screen name={screens.ALL_SETS} component={SetsNavigator} />
      <Tab.Screen name={screens.ALL_SERIES} component={SeriesNavigator} />
    </Tab.Navigator>
  );
};
