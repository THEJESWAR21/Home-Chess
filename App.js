import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Home from './components/Home';
import Menu from './components/Menu';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//default App
export default function App(){
  
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{  headerShown: false }}  />
      <Stack.Screen name="Menu" component={Menu}  options={{  }}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
  }

  const Stack = createStackNavigator();

