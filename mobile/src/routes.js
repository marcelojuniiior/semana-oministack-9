import React from "react";
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Book from './pages/Book';
import Login from "./pages/Login";
import List from "./pages/List";


const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen 
            options={{headerTransparent: true, headerShown: false, title: '',}} 
            name="Home" 
            component={Login} />
            <Stack.Screen 
            options={{headerTransparent: true, headerShown: false, title: '',}} 
            name="List" 
            component={List} />
            <Stack.Screen 
            options={{headerTransparent: true, headerShown: false, title: '',}} 
            name="Book" 
            component={Book} />
            
          </Stack.Navigator>
        </NavigationContainer>
      );
}