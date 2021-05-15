import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Home from './components/Home';
import Menu from './components/Menu';
import Timer from './components/Timer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

//default App
export default function App(){
  
  return(
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Timer" component={Timer}  options={{ headerShown: false  }}  />
      <Stack.Screen name="Menu" component={Menu}  options={{ headerShown: false  }}  />
      </Stack.Navigator>
    </NavigationContainer>
</PaperProvider>
  )
  }

  const Stack = createStackNavigator();

