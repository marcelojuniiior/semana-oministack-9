import React from "react";
import { Text, View } from "react-native";
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from "./src/routes";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Routes />
    
   
  //  <NavigationContainer>
   //   <Stack.Navigator>
     //   <Stack.Screen name="Home" component={Book} />
      //</Stack.Navigator>
   // </NavigationContainer>
  );
}

