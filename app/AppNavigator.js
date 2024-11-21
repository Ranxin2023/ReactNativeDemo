import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FunctionalCounterScreen from './screens/FunctionalCounterScreen'
import CounterScreenClass from './screens/FunctionalCounterScreen'
import TodoReducerScreen from './screens/TodoReducerDemo'
import AsyncStorageScreen from './screens/UserMatching/AsyncStorageDemo'
import UserHomeScreen from './screens/UserMatching/UserHomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator()
const AppNavigator = () => {
  return (
    <NavigationIndependentTree>

    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="User Home Screen"
      screenOptions={{headerShown:false}}>
        <Stack.Screen 
        name="Functional Counter" 
        component={FunctionalCounterScreen} 
        />
        <Stack.Screen 
        name="Class Counter" 
        component={CounterScreenClass} />
        <Stack.Screen name="Todo Reducer" component={TodoReducerScreen} />
        <Stack.Screen name="Async Storage" component={AsyncStorageScreen} />
        <Stack.Screen name="User Home Screen" component={UserHomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
};



export default AppNavigator;
