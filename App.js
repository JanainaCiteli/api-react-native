
import React from 'react';
import { View} from 'react-native';
import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

  
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" options={{ headerShown: false }}component={Login} />
        <Stack.Screen name="HomeTab" options={{ headerShown: false }}component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

function HomeTab(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
    </Tab.Navigator>
  )
}