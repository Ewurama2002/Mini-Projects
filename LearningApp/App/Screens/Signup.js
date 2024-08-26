import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topLeftEllipse}></View>
      <View style={styles.bottomRightEllipse}></View>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
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
  backToLoginText: {
    color: '#4169E1', // Same color as the ellipses
    fontSize: 14,
    marginTop: 20,
  },
});
