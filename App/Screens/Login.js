import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { auth } from './firebase'; // Make sure this is the correct path to your Firebase configuration
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../UserContext/UserContext';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message visibility
  const { setUser } = useContext(UserContext);

  const handleSubmit = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged In Successfully");
      // Optionally, navigate to another screen after successful login
      const user = userCredential.user;
      setUser(user);
      navigation.navigate('Home');
    } catch (err) {
      console.log(err.message);
      setErrorMessage(err.message); // Show error message
      setTimeout(() => setErrorMessage(''), 3000); // Hide error message after 3 seconds
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topRightEllipse}></View>
      <View style={styles.bottomLeftEllipse}></View>
      <Text style={styles.welcomeText}>Welcome Back</Text>
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
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      {errorMessage && (
        <View style={styles.errorMessageContainer}>
          <Text style={styles.errorMessageText}>{errorMessage}</Text>
        </View>
      )}
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
  errorMessageContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#F8D7DA', // Light red background
    borderRadius: 5,
  },
  errorMessageText: {
    color: '#721C24', // Dark red text
    fontSize: 16,
  },
});
