import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function Unit5e() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}> Information and Communications Technology</Text>
      <Text style={styles.content}> 
        {'\n'}
        Information and Communications Technology (ICT) refers to technologies that facilitate communication and the management of information. This includes hardware like computers and smartphones, software like applications and operating systems, and network technologies like the internet and telecommunications.        {'\n\n'}
        
        {'\n'}
        ICT is pivotal in enabling digital communication, data processing, and access to information, impacting various sectors such as education, business, and entertainment.      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  subHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
});
