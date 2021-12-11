import React from 'react';
import { View } from 'react-native';
import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}


