import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topLeftEllipse}></View>
      <View style={styles.bottomRightEllipse}></View>
      <Text style={styles.welcomeText}>Welcome</Text>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginButtonText}>Log In </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1', // Lighter shade of blue
    alignItems: 'center',
    justifyContent: 'center',
  },
  topLeftEllipse: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 150,
    backgroundColor: '#0000CD', // Slightly lighter blue ellipse
    top: -100,
    left: -100,
  },
  bottomRightEllipse: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 150,
    backgroundColor: '#0000CD', // Slightly lighter blue ellipse
    bottom: -100,
    right: -100,
  },
  welcomeText: {
    color: '#FFFFFF', // White color text
    fontSize: 40,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#FFFFFF', // White background for button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#4169E1', // Same color as the background
    fontSize: 18,
  },
});
