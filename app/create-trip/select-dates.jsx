import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { useRouter } from 'expo-router'; // Make sure to import useRouter inside the component

export default function SelectDates() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const navigation = useNavigation();
  const router = useRouter(); // Correct placement of useRouter

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    });
  }, []);

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type === 'START_DATE') {
      setSelectedStartDate(moment(date).toDate());
    } else {
      setSelectedEndDate(moment(date).toDate());
    }
  };

  const OnDateSelectionContinue = () => {
    // Use the correct state variables here
    if (!selectedStartDate || !selectedEndDate) {
      ToastAndroid.show('Please select Start and End Date', ToastAndroid.LONG);
      return;
    }

    const totalNoOfDays = moment(selectedEndDate).diff(moment(selectedStartDate), 'days');
    console.log(totalNoOfDays + 1);
  };

  return (
    <View style={{
      padding: 15,
      paddingTop: 75,
      backgroundColor: '#ffffff',
      height: '100%',
    }}>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>

      <View style={{
        marginTop: 30,
      }}>
        <CalendarPicker
          allowRangeSelection={true}
          onDateChange={onDateChange}
          minDate={new Date()}
          maxRangeDuration={7}
          selectedRangeStyle={{
            backgroundColor: '#000000',
          }}
          selectedDayTextStyle={{
            color: '#ffffff',
          }}
        />
      </View>

      <TouchableOpacity
        onPress={OnDateSelectionContinue}
        style={{
          padding: 15,
          marginTop: 30,
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
            textAlign: 'center',
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/create-trip/search-budget')} // Use push for navigation
        style={{
          padding: 15,
          backgroundColor: '#000000',
          paddingHorizontal: 30,
          borderRadius: 10,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            color: '#ffffff',
            fontFamily: 'outfit-medium',
            fontSize: 17,
            textAlign: 'center',
          }}
        >
          Budget Page
        </Text>
      </TouchableOpacity>
    </View>
  );
}
