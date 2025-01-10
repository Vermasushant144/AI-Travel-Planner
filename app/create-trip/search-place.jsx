import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchPlace() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search',
    });
  }, [navigation]); // Added dependency for clarity

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log('Selected Data:', data.description);
          console.log(details?.geometry.location)
          console.log(details?.photos[0]?.photo_reference);
          console.log(details?.url)
        }}
        query={{
          key: 'AIzaSyDACXCsR38QKeXHmWBOxtvr1BP10C1FnW8', // Replace with your Google API key
          language: 'en',
        }}
        styles={{
          textInput: styles.textInput,
          listView: styles.listView,
        }}
        fetchDetails={true} // Fetch detailed place information
        debounce={400} // Reduce API call frequency
      />

       <TouchableOpacity
       onPress={() => router.push('/create-trip/select-traveler')}
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

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 75,
    backgroundColor: '#ffffff',
    height: '100%',
  },
  textInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  listView: {
    backgroundColor: '#ffffff',
  },
});
