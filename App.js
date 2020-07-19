import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react'

import Home from './src/screens/Home/Home.screen'
import Products from './src/screens/Products/Products.screen'

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen 
        name = 'products'
        component={Products}
        options={{headerShown: false}}
        />
    </Stack.Navigator>
  </NavigationContainer>


  )
}

