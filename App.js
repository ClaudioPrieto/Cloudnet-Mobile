import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"

import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';

import {Home, Videocall, Catalog, Login} from './screens'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions = {{
          headerShown: false}}
        initialRouteName ={"Home"}
        >
        <Stack.Screen name = "Home" component = {Home}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8e6f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
