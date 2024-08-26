import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function ForgotPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topLeftEllipse}></View>
      <View style={styles.bottomRightEllipse}></View>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
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
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#4169E1', // Royal blue ellipse
    top: -100,
    left: -100,
  },
  bottomRightEllipse: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#4169E1', // Royal blue ellipse
    bottom: -100,
    right: -100,
  },
  title: {
    color: '#000000', // Black color text
    fontSize: 24,
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
  resetButton: {
    backgroundColor: '#4169E1', // Same color as the ellipses
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  resetButtonText: {
    color: '#FFFFFF', // White color text
    fontSize: 18,
  },
  backToLoginText: {
    color: '#4169E1', // Same color as the ellipses
    fontSize: 14,
    marginTop: 20,
  },
});
