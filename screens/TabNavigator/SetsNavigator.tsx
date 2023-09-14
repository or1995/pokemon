import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {screens} from '../../constants/routes';
import Sets from '../Sets/Sets';
import setDetails from '../SetDetails/setDetails';

const SetsStack = createNativeStackNavigator();

export const SetsNavigator = () => {
  return (
    <SetsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SetsStack.Screen name={screens.ALL_SETS_LIST} component={Sets} />
      <SetsStack.Group screenOptions={{presentation: 'modal'}}>
        <SetsStack.Screen name={screens.SET_DETAILS} component={setDetails} />
      </SetsStack.Group>
    </SetsStack.Navigator>
  );
};
