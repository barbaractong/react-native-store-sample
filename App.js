import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, { useState } from 'react'

import Home from './src/screens/Home/Home.screen'
import Products from './src/screens/Products/Products.screen'

import AddressContext from './context/AddressInput.context'
import LocationContext from './context/Location.context'

const Stack = createStackNavigator();

export default function App() {

  const addressHook = useState('');
  const locationHook = useState('');

  return (
      <AddressContext.Provider value={addressHook}>
        <LocationContext.Provider value={locationHook}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name='Home'
                component={Home}
                options={{
                  title: 'Home',
                  headerStyle: {
                    backgroundColor: '#fff',
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen
                name='Products'
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
        </LocationContext.Provider>
      </AddressContext.Provider>
  )
}

