<<<<<<< Updated upstream

import React from 'react';
import { View } from 'react-native';
import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import Categoria from './src/pages/Categoria/Categoria';
import Carrinho from './src/pages/Carrinho/Carrinho';
import Favoritos from './src/pages/Favoritos/Favoritos';
import Logout from './src/pages/Logout/Logout';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

=======
import React, { Component } from "react";
import Home from "./src/pages/Home/Home";
import Login from "./src/pages/Login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Carrinho from "./src/pages/Carrinho/Carrinho";
import Detalhe from "./src/pages/Home/Detail/Detalhe";
import Logout from "./src/pages/Logout/Logout";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
>>>>>>> Stashed changes

  const Tab = createBottomTabNavigator();
 
export default function App() {
  return (

<<<<<<< Updated upstream
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
        }else if (route.name === 'Favoritos') {
          iconName = focused ? 'heart-outline' : 'heart-outline';
      }else if (route.name === 'Carrinho') {
        iconName = focused ? 'cart-outline' : 'cart-outline';
    }else if (route.name === 'login') {
      iconName = focused ? 'person-outline' : 'person-outline';
  }else if (route.name === 'Logout') {
    iconName = focused ? 'log-out-outline' : 'log-out-outline';
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
          
          <Tab.Screen name="Home" options={{headerShown: false}} component={Home} />
          <Tab.Screen name="Categoria" component={Categoria} />
          <Tab.Screen name="Favoritos" component={Favoritos} />          
          <Tab.Screen name="Carrinho" component={Carrinho} />
          <Tab.Screen name="Logout" component={Logout} />   
         
        </Tab.Navigator>
        
      </NavigationContainer>

  );
}

=======
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="HomeTab"
            options={{ headerShown: false }}
            component={HomeTab}
          />
          <Stack.Screen
            name="Detalhe"
            options={{ headerShown: false }}
            component={Detalhe}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "md-home-outline";
          } else if (route.name === "Categoria") {
            iconName = focused ? "list-sharp" : "ios-list";
          } else if (route.name === "Favoritos") {
            iconName = focused ? "heart-outline" : "heart-outline";
          } else if (route.name === "Carrinho") {
            iconName = focused ? "cart-outline" : "cart-outline";
          } else if (route.name === "login") {
            iconName = focused ? "person-outline" : "person-outline";
          }else if (route.name === "Logout") {
            iconName = focused ? "log-out-outline" : "log-out-outline";
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          paddingBottom: 5,
        },
      })}
    >
 
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Carrinho" component={Carrinho} options={{headerShown: false}} />
      <Tab.Screen name="Logout" component={Logout} options={{headerShown: false}}/>
      
    </Tab.Navigator>
  );
};
>>>>>>> Stashed changes
