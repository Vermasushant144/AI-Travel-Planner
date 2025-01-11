import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { FlatList } from 'react-native';
import OptionCard from '../../components/CreateTrip/OptionCard'; // Ensure this component exists

export default function SearchBudget() {
  const [selectedTraveler, setSelectedTraveler] = useState(null); // State for selected option

  const SelectBudgetOptions = [
    {
      id: 1,
      title: 'Cheap',
      desc: 'Stay conscious of costs',
      icon: '💸',
    },
    {
      id: 2,
      title: 'Moderate',
      desc: 'Keep costs average',
      icon: '⚖️',
    },
    {
      id: 3,
      title: 'Luxury',
      desc: 'Don’t worry about costs',
      icon: '⚜️',
    },
  ];

  const navigation = useNavigation();

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
        Budget
      </Text>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: 'outfit',
            color: '#808080',
            fontSize: 17,
          }}
        >
          Choose spending habits for your trip
        </Text>

        <FlatList
          data={SelectBudgetOptions}
          keyExtractor={(item) => item.id.toString()} // Unique key
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item.title)} // Update state
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard option={item} selectedOption={selectedTraveler} />
            </TouchableOpacity>
          )}
        />

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
    </View>
  );
}
