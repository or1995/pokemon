import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {screens} from '../../constants/routes';
import Cards from '../Cards/Cards';
import CardDetails from '../CardDetails/CardDetails';

const CardsStack = createNativeStackNavigator();

export const CardsNavigator = () => {
  return (
    <CardsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <CardsStack.Screen name={screens.ALL_CARDS_LIST} component={Cards} />
      <CardsStack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <CardsStack.Screen
          name={screens.CARD_DETAILS}
          component={CardDetails}
        />
      </CardsStack.Group>
    </CardsStack.Navigator>
  );
};
