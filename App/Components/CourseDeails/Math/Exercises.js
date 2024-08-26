import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Sample data structure
const data = {
  'Year 1': {
    chapters: [" Sets and Operations on Sets ", " Real Number Systems "]
  },
  'Year 2': {
    chapters: [" Modular Arithmetic ", " Indices and Algorithms "]
  },
  'Year 3': {
    chapters: [" Constructions ", " Mensuration II "]
  }
};

export default function Exercises() {
  // State for managing the expanded sections
  const [expandedLearningMaterial, setExpandedLearningMaterial] = useState(false);
  const [expandedYear, setExpandedYear] = useState(null);

  const navigation = useNavigation();

  // Toggle learning material visibility
  const toggleLearningMaterial = () => {
    setExpandedLearningMaterial(!expandedLearningMaterial);
  };

  // Toggle year visibility
  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  // Render chapters within a year
  const renderChapters = (chapters) => (
    chapters.map((chapter, index) => (
      <TouchableOpacity 
        key={index} 
        onPress={() => navigation.navigate('math-ex')}
        style={styles.chapterBox}
      >
        <Text>
          {chapter} <Icon name="chevron-right" />
        </Text>
      </TouchableOpacity>
    ))
  );

  // Render years within the learning material
  const renderYears = () => (
    Object.keys(data).map((year, index) => (
      <View key={index}>
        <TouchableOpacity onPress={() => toggleYear(year)} style={styles.yearBox}>
          <Text style={{ fontSize: 18 }}>
            {year} <Icon name={expandedYear === year ? "chevron-up" : "chevron-down"} />
          </Text>
        </TouchableOpacity>
        {expandedYear === year && renderChapters(data[year].chapters)}
      </View>
    ))
  );

  return (
    <View style={{ padding: 20 }}>
      {/* Learning Material box */}
      <TouchableOpacity onPress={toggleLearningMaterial} style={styles.learningMaterialBox}>
        <Text style={{ fontSize: 18 }}>
          Learning Material <Icon name={expandedLearningMaterial ? "chevron-up" : "chevron-down"} />
        </Text>
      </TouchableOpacity>
      {expandedLearningMaterial && renderYears()}
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  learningMaterialBox: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  yearBox: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  chapterBox: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    marginLeft: 10,
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
