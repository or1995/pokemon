import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from './routes';
import Cards from '../screens/Cards/Cards';
import Sets from '../screens/Sets/Sets';
import Series from '../screens/Series/Series';
import {NavigationBar} from '../components/navigationBar/navigationBar';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => (
        <NavigationBar navigation={props.navigation} state={props.state} />
      )}>
      <Tab.Screen name={screens.ALL_CARDS} component={Cards} />
      <Tab.Screen name={screens.ALL_SETS} component={Sets} />
      <Tab.Screen name={screens.ALL_SERIES} component={Series} />
    </Tab.Navigator>
  );
};
