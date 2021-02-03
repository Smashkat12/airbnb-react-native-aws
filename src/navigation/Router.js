import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

/* Screens */
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsFilterScreen from '../screens/GuestsFilter';

import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
          options={{title: 'Search you destination'}}
        />

        <Stack.Screen
          name={'Guests'}
          component={GuestsFilterScreen}
          options={{title: 'How many people?'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
