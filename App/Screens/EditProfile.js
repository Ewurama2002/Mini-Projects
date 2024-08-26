import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { auth } from './firebase';
import { updateProfile } from 'firebase/auth';

export default function EditProfile({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  const handleSave = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: photoURL,
      });

      setUser({ ...user, displayName: username, photoURL: photoURL });
      navigation.goBack();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topRightEllipse}></View>
      <View style={styles.bottomLeftEllipse}></View>
      <Text style={styles.title}>Edit Profile</Text>
      <Image
        source={{ uri: photoURL || 'https://via.placeholder.com/150' }}
        style={styles.profileImage}
      />
      <TextInput
        style={styles.input}
        value={photoURL}
        onChangeText={setPhotoURL}
        placeholder="Profile Picture URL"
      />
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  topRightEllipse: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#4169E1',
    top: -150,
    right: -150,
    opacity: 0.5,
  },
  bottomLeftEllipse: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#4169E1',
    bottom: -150,
    left: -150,
    opacity: 0.5,
  },
  title: {
    color: '#333',
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderColor: '#4169E1',
    borderWidth: 2,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
