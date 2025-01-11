import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { FlatList } from 'react-native';
// import { CreateTripContext } from ''

import OptionCard from './../../components/CreateTrip/OptionCard'; // Ensure this component is imported correctly
// import { useRoute } from '@react-navigation/native';

export default function SelectTraveler() {
  const navigation = useNavigation();
  const router = useRouter();


  const [selectedTraveler,setSelectedTraveler] = useState();
  // const {tripData,setTripData} = useContext(CreateTripContext);

  // Defining the SelectTravelerList directly within this file
  const SelectTravelerList = [
    {
      id: 1,
      title: 'Just Me',
      desc: 'A solo travels in explore',
      icon: '✈️',
      people: '1',
    },
    {
      id: 2,
      title: 'A Couple',
      desc: 'Two travelers in tandem',
      icon: '💑',
      people: '2 people',
    },
    {
      id: 3,
      title: 'Family',
      desc: 'A group of fun-loving adventurers',
      icon: '👪',
      people: '3 to 5 people',
    },
    {
      id: 4,
      title: 'Friends',
      desc: 'A bunch of thrill-seekers',
      icon: '😎😎',
      people: '5 to 8 people',
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: '#ffffff',
        height: '100%',
      }}
    >
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
        }}
      >
        Who's Traveling
      </Text>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
          fontFamily: 'outfit-bold',
          fontSize: 23,
        }}
        >
          Choose your travelers
        </Text>

        <FlatList
          data={SelectTravelerList}
          keyExtractor={(item) => item.id.toString()} // Unique key
          renderItem={({ item }) => (
            <TouchableOpacity 
            onPress={()=> setSelectedTraveler(item.title)}
            style={{
              marginVertical:10
            }}>
              <OptionCard option={item}  selectedOption={selectedTraveler}/>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* templory button */}

      
      <TouchableOpacity
             onPress={() => router.push('create-trip/select-dates')}
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
                 display:'flex',
                 justifyContent:"center",
                 textAlign:"center",
                 
               }}
             >
               Contiune
             </Text>
           </TouchableOpacity>
    </View>
  );
}
