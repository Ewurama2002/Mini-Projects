import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { auth } from './firebase'; // Import your Firebase configuration
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(false); // State to manage success message visibility

  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account Created");
      setSuccessMessage(true); // Show success message
      setTimeout(() => setSuccessMessage(false), 3000); // Hide success message after 3 seconds
      // Optionally, navigate to another screen after successful sign up
      // navigation.navigate('SomeScreen');
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topLeftEllipse}></View>
      <View style={styles.bottomRightEllipse}></View>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address" 
        value={email}
        onChangeText={(text) => setEmail(text)} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry={true} 
        value={password}
        onChangeText={(text) => setPassword(text)} 
      />
      <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      {successMessage && (
        <View style={styles.successMessageContainer}>
          <Text style={styles.successMessageText}>Account Created Successfully</Text>
        </View>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backToLoginText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  topLeftEllipse: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 150,
    backgroundColor: '#4169E1', // Royal blue ellipse
    top: -100,
    left: -100,
  },
  bottomRightEllipse: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 150,
    backgroundColor: '#4169E1', // Royal blue ellipse
    bottom: -100,
    right: -100,
  },
  title: {
    color: '#000000', // Black color text
    fontSize: 40,
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#F0F0F0', // Light grey background for input
    borderRadius: 5,
  },
  signUpButton: {
    backgroundColor: '#4169E1', // Same color as the ellipses
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  signUpButtonText: {
    color: '#FFFFFF', // White color text
    fontSize: 18,
  },
  successMessageContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#D4EDDA', // Light green background
    borderRadius: 5,
  },
  successMessageText: {
    color: '#155724', // Dark green text
    fontSize: 16,
  },
  backToLoginText: {
    color: '#4169E1', // Same color as the ellipses
    fontSize: 14,
    marginTop: 20,
  },
});
