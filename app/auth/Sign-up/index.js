import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onCreateAccount = () => {
    if (!fullName || !email || !password) {
      ToastAndroid.show('Please fill out all fields', ToastAndroid.BOTTOM);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User created:', user);
        ToastAndroid.show('Account created successfully!', ToastAndroid.BOTTOM);
       
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Error creating account:', errorMessage);
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        <Text style={styles.highlight}>C</Text>reate Account
      </Text>
      <Text style={styles.subheading}>Join us to experience something great</Text>

      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput
          placeholder="Enter Full Name"
          value={fullName}
          onChangeText={setFullName}
          style={styles.input}
        />

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>

      <TouchableOpacity onPress={onCreateAccount} style={styles.button}>
        <Text style={styles.buttonText}>Create New Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createButton} onPress={() => navigation.goBack()}>
        <Text style={styles.createButtonText}>Sign In</Text>
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
  highlight: {
    fontSize: 60,
    color: '#ff0000',
  },
  subheading: {
    fontSize: 20,
    color: '#606060',
    textAlign: 'center',
    marginBottom: 20,
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
