import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topRightEllipse}></View>
      <View style={styles.bottomLeftEllipse}></View>
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginButtonText}>Login</Text>
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
  topRightEllipse: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 150,
    backgroundColor: '#4169E1', // Royal blue ellipse
    top: -100,
    right: -100,
  },
  bottomLeftEllipse: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 150,
    backgroundColor: '#4169E1', // Royal blue ellipse
    bottom: -100,
    left: -100,
  },
  welcomeText: {
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
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  linkText: {
    color: '#4169E1', // Same color as the ellipses
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#4169E1', // Same color as the ellipses
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF', // White color text
    fontSize: 18,
  },
});
