import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from './../constants/Colors'; // Fixed import
import { useRouter } from 'expo-router';
// import { red } from 'react-native-reanimated/lib/typescript/Colors';

export default function Login() {
// make the routerhook
const router = useRouter();

  return (
    <View style={styles.mainContainer}> 
      {/* Main Parent View */}
      <Image
        source={require("./../assets/images/output.jpg")}
        style={styles.image}
      />

      <View style={styles.container}>
        <Text style={styles.title}>AI Travel Planner</Text>
        <Text style={styles.subheading}>
        <Text  style={{fontSize:44 ,
            color:'#ff0000', borderColor:'#000000'}}>E</Text>xplore
        
         the world smarter with AI-powered travel insights, crafted for your next unforgettable adventure. 🌍✨
        </Text>
        

        <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('auth/sign-in')}
        >
            <Text style={{
                color: '#FFFFFF',
                textAlign: 'center',
                fontFamily: 'outfit',
                fontSize: 17,
            }}>
                Get Started
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  image: {
    width: '100%',
    height: 450,
  }, 
  container: {
    flex: 1, // Remaining space occupy karega
    backgroundColor: '#FFFFFF', // Background color
    marginTop: -20, // Image ke upar overlap karega
    borderTopLeftRadius: 30, // Left corner radius
    borderTopRightRadius: 30, // Right corner radius
    padding: 25,
    height:'100%',
  
  },
  title: {
    fontSize: 28,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    color: Colors.BLACK,
  },
  subheading:{
    fontFamily:'outfit-medium',
    fontSize:20,
    // backgroundColor:'#87CEEB',
    color:'#808080',
    textAlign:'center',
 
    // padding:10,
    borderTopLeftRadius: 20, // Left corner radius
    borderTopRightRadius: 20, // Right corner radius

  },
  button:{
textAlign:'center',
padding:15,
marginTop:'15%',
backgroundColor:'#000000',
borderRadius:99,
  }
});

