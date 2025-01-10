import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TapLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      
        
      }}
    >
      <Tabs.Screen
        name="mytrip" 
        options={{
          tabBarLabel:'My Trip' ,
          tabBarIcon: ({ color }) => <Ionicons name="location" size={24} color={'#000000'} />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarLabel:'Discover',
          tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={'#000000'} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel:'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={'#000000'} />,
        }}
      />
    </Tabs>
  );
}
