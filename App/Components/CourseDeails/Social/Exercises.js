import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Sample data structure
const data = {
    'Year 1': {
      chapters: {
        " ENVIRONMENT ": ["Self Identity", "Adolescent Reproductive Heatlh"],
        " GOVERNANCE, POLITICS AND STABILITY ": ["National Independence and Self-Reliance", "Peace Building and Conflict Resolution"],
      }
    },
    'Year 2': {
      chapters: {
          " ENVIRONMENT ": ["The Institution Of Marriage", "Responsible Parenting"],
          " GOVERNANCE, POLITICS AND STABILITY ": ["Leadership and Followership ", "Our Constitution, Democracy and Nation Building"],
        }
    },
    'Year 3': {
      chapters: {
          " ENVIRONMENT ": ["Our Physical Environment and Environmental Challenges", "Education and Societal Change"],
          " GOVERNANCE, POLITICS AND STABILITY ": ["Rights and Responsibilities of the Individual", "Ghana and the International Community"],
        }
    }
  };
  

export default function Exercises() {
  // State for managing the expanded sections
  const [expandedLearningMaterial, setExpandedLearningMaterial] = useState(false);
  const [expandedYear, setExpandedYear] = useState(null);
  const [expandedChapter, setExpandedChapter] = useState(null);

  // Toggle learning material visibility
  const toggleLearningMaterial = () => {
    setExpandedLearningMaterial(!expandedLearningMaterial);
  };

  const navigation = useNavigation();

  // Toggle year visibility
  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
    setExpandedChapter(null); // Close chapters when year changes
  };

  // Toggle chapter visibility
  const toggleChapter = (chapter) => {
    setExpandedChapter(expandedChapter === chapter ? null : chapter);
  };

  // Render units within a chapter
  const renderUnits = (units) => (
    units.map((unit, index) => (
      <TouchableOpacity 
        key={index} 
        style={styles.unitBox}
        onPress={() => navigation.navigate('unit4ex')} // Navigate to UnitPage
      >
        <Text>{unit}</Text>
      </TouchableOpacity>
    ))
  );

  // Render chapters within a year
  const renderChapters = (chapters) => (
    Object.keys(chapters).map((chapter, index) => (
      <View key={index}>
        <TouchableOpacity onPress={() => toggleChapter(chapter)} style={styles.chapterBox}>
          <Text>
            {chapter} <Icon name={expandedChapter === chapter ? "chevron-up" : "chevron-down"} />
          </Text>
        </TouchableOpacity>
        {expandedChapter === chapter && renderUnits(chapters[chapter])}
      </View>
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
          Exercises <Icon name={expandedLearningMaterial ? "chevron-up" : "chevron-down"} />
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
  unitBox: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    marginLeft: 20,
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
