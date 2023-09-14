import React from 'react';
import {screens} from '../../constants/routes';
import Cards from '../Cards/Cards';
import Sets from '../Sets/Sets';
import Series from '../Series/Series';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

export const TabNavigator = () => {
  return (
    <RootStack.Group>
      <RootStack.Screen name={screens.ALL_CARDS} component={Cards} />
      <RootStack.Screen name={screens.ALL_SETS} component={Sets} />
      <RootStack.Screen name={screens.ALL_SERIES} component={Series} />
    </RootStack.Group>
  );
};
