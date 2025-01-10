import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
  const router = useRouter();

  return (
    <View
      style={{
        padding: 25,
        marginTop: 50,
        alignItems: 'center',
        gap: 20,
      }}
    >
      {/* Location Icon */}
      <Ionicons name="location-sharp" size={40} color="black" />

      {/* No Trips Message */}
      <Text
        style={{
          fontSize: 25,
          fontFamily: 'outfit-medium',
          textAlign: 'center',
        }}
      >
        No Trips Planned Yet
      </Text>

      {/* Prompt Message */}
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'outfit',
          textAlign: 'center',
          color: '#808080',
          lineHeight: 30, // Added for better readability
        }}
      >
        Looks like it's time to plan a new travel experience! Get started below.
      </Text>

      {/* Start New Trip Button */}
      <TouchableOpacity
  onPress={() => router.push('/create-trip/search-place')}
  style={{
    padding: 15,
    backgroundColor: '#000000',
    paddingHorizontal: 30,
    borderRadius: 10,
  }}
>
  <Text
    style={{
      color: '#ffffff',
      fontFamily: 'outfit-medium',
      fontSize: 17,
    }}
  >
    Start a New Trip
  </Text>
</TouchableOpacity>

    </View>
  );
}
