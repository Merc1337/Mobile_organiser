import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import MainPage from './components/MainPage';
import TaskPage from './components/Task';

export default function App() {


  return (
 <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen 
          name="MainPage"
          component={MainPage}
          options={{

            title: 'Запланированные дела', //Set Header Title
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#7B68EE',
          },
          }}
        />
        <Stack.Screen
          name="Task"
          component={TaskPage}
          options={{

            title: 'Задачи', //Set Header Title
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#7B68EE',
          }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
