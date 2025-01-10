import { Stack } from 'expo-router';
import React from 'react';
// import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';

import { useFonts } from 'expo-font';

export default function TabLayout() {
  
  useFonts({
    'outfit':require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold':require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium':require('../assets/fonts/Outfit-Medium.ttf'),
  })

  return (
    <Stack screenOptions={{
      headerShown:false
    }}>
      {/* <Stack.Screen name='index' options={{
        headerShown:false
      }} /> */}
      <Stack.Screen name='(tabs)' />
    </Stack>
   
  );
}
