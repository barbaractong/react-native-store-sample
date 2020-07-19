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
        name = 'Bebidas disponíveis'
        component={Products}
        options={{
          title: 'Bebidas disponíveis',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
    </Stack.Navigator>
  </NavigationContainer>


  )
}

