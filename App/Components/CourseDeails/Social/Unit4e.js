import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function Unit4e() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}> Self Identity</Text>
      <Text style={styles.content}> 
        {'\n'}
        Self-identity refers to an individual's perception and understanding of themselves, including their personal characteristics, beliefs, values, and roles in society. It encompasses aspects like personality traits, social roles, relationships, and cultural identity. Self-identity is shaped by both internal factors, such as personal experiences and introspection, and external influences, such as family, culture, and societal expectations.        
        {'\n\n'}
        
        {'\n'}
        It plays a crucial role in how people see themselves and interact with the world, influencing their decisions, behavior, and overall sense of belonging. A strong, positive self-identity is important for personal well-being and self-esteem.
      </Text>
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
