import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Unit1e() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Unit 1e: Knowledge on Vowels and Consonants</Text>
      <Text style={styles.content}>
        <Text style={styles.subHeading}>Vowels:</Text> 
        {'\n'}
        Vowels are speech sounds that are produced without any significant constriction or blockage of airflow in the vocal tract. The main vowels in the English language are A, E, I, O, and U. Sometimes Y is also considered a vowel.
        {'\n\n'}
        <Text style={styles.subHeading}>Consonants:</Text>
        {'\n'}
        Consonants are speech sounds that are produced with some degree of constriction or closure in the vocal tract. The English alphabet includes 21 consonants: B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, and Z.
      </Text>
    </View>
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
