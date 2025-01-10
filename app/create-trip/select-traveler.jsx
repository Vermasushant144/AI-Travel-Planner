import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

export default function SelectTraveler() {
    const navigation=useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false,
            headerTransparent:true,
            headerTitle:''

        })
    },[])
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:'#ffffff',
        height:'100%',
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,

      }}>Who's Traveling</Text>

      <View style={{
        marginTop:20,
      }}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:23,
        }} >Choose your travelers</Text>
      </View>
    </View>
  )
}