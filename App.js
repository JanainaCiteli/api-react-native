import React from 'react';
import { View } from 'react-native';
import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import Categoria from './src/pages/Categoria/Categoria'
import Favoritos from './src/pages/Favoritos/Favoritos';
import Carrinho from './src/pages/Carrinho/Carrinho';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator initialRouteName="Login" screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'md-home-outline';
          } else if (route.name === 'Categoria') {
            iconName = focused ? 'list-sharp' : 'ios-list';
          } else if (route.name === 'Favoritos') {
            iconName = focused ? 'heart-outline' : 'heart-outline';
          } else if (route.name === 'Carrinho') {
            iconName = focused ? 'cart-outline' : 'cart-outline';
          } else if (route.name === 'login') {
            iconName = focused ? 'person-outline' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          paddingBottom: 5,
        },
      })}
      >


        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categoria" component={Categoria} />
        <Tab.Screen name="Favoritos" component={Favoritos} />
        <Tab.Screen name="Carrinho" component={Carrinho} />

      </Tab.Navigator>

    </NavigationContainer>

  );
}

