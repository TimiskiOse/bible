import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import DevotionalScreen from './src/screens/DevotionalScreen';
import ReaderScreen from './src/screens/ReaderScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator 
        screenOptions={{
          tabBarStyle: { backgroundColor: '#1A1A1A', borderTopColor: '#333' },
          headerStyle: { backgroundColor: '#1A1A1A', shadowColor: 'transparent' },
          headerTintColor: '#FFFFFF',
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#888888',
        }}
      >
        <Tab.Screen name="Devotional" component={DevotionalScreen} />
        <Tab.Screen name="Read" component={ReaderScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}