import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {screens} from '../../constants/routes';
import Series from '../Series/Series';
import SerieDetails from '../SerieDetails/SerieDetails';

const SeriesStack = createNativeStackNavigator();

export const SeriesNavigator = () => {
  return (
    <SeriesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SeriesStack.Screen name={screens.ALL_SERIES_LIST} component={Series} />
      <SeriesStack.Group screenOptions={{presentation: 'modal'}}>
        <SeriesStack.Screen
          name={screens.SERIE_DETAILS}
          component={SerieDetails}
        />
      </SeriesStack.Group>
    </SeriesStack.Navigator>
  );
};
