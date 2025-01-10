import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig'; // Adjust path if necessary
// import { replace } from 'expo-router/build/global-state/routing';

export default function SignIn() {
  const navigation = useNavigation();
  // Inside your component
const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const OnSignIn = () => {
    if (!email || !password) {
      ToastAndroid.show('Please Enter Email & Password', ToastAndroid.LONG);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace('mytrip')
        console.log('Signed in:', user);
        ToastAndroid.show('Sign-In Successful!', ToastAndroid.SHORT);
      })
      .catch((error) => {
        if (error.code === 'auth/network-request-failed') {
          ToastAndroid.show('Network error. Please check your connection.', ToastAndroid.LONG);
        } else {
          ToastAndroid.show('Error: ' + error.message, ToastAndroid.LONG);
        }
        console.error('Sign-In Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        <Text style={{ fontSize: 60, color: '#ff0000' }}>L</Text>et’s Sign You In
      </Text>
      <Text style={styles.subheading}>Welcome Back</Text>
      <Text style={styles.subheading}>You've been missed</Text>

      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          placeholder="Enter Email"
          onChangeText={(value) => setEmail(value)}
          style={styles.input}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          placeholder="Enter Password"
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={OnSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Create New Account Button */}
      <TouchableOpacity
  style={styles.createButton}
  onPress={() => router.push('auth/Sign-up')}>
  <Text style={styles.createButtonText}>Create New Account</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 20,
    color: '#606060',
    textAlign: 'center',
    marginBottom: 10,
  },
  formContainer: {
    width: '100%',
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#808080',
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#000000',
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
  createButton: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 20,
  },
  createButtonText: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  },
});
