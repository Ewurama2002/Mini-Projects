import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function Unit1() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Unit 1e: Knowledge on Sets and Operations on Sets</Text>
      <Text style={styles.content}>
        <Text style={styles.subHeading}>Sets:</Text> 
        {'\n'}
        A set is a collection of distinct objects, considered as an object in its own right. For example, the numbers 1, 2, and 3 are distinct objects when considered separately, but when they are considered collectively as the set (1, 2, 3), they form a single object.
        {'\n\n'}
        Sets are usually denoted with curly braces, for example, (a,b,c) is a set. The objects in a set are called elements or members of the set.
        {'\n\n'}
        <Text style={styles.subHeading}>Operations on Sets:</Text>
        {'\n'}
        Operations on sets include union, intersection, difference, and complement.
        {'\n\n'}
        <Text style={styles.subSubHeading}>Union:</Text> 
        {'\n'}
        The union of two sets A and B is the set of elements that are in A, in B, or in both. It is denoted by A ∪ B.
        {'\n\n'}
        <Text style={styles.subSubHeading}>Intersection:</Text> 
        {'\n'}
        The intersection of two sets A and B is the set of elements that are in both A and B. It is denoted by A ∩ B.
        {'\n\n'}
        <Text style={styles.subSubHeading}>Difference:</Text> 
        {'\n'}
        The difference of two sets A and B, denoted by A - B, is the set of elements that are in A but not in B.
        {'\n\n'}
        <Text style={styles.subSubHeading}>Complement:</Text> 
        {'\n'}
        The complement of a set A, denoted by A', is the set of all elements in the universal set that are not in A.
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
  subSubHeading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});
