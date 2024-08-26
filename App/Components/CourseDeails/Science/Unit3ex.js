import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const questions = [
    {
      question: "What is the primary goal of Integrated Science?",
      options: ["To focus solely on biological concepts", "To separate different scientific disciplines", "To prioritize chemistry over other sciences", "To understand the connections between various scientific fields"],
      correctOption: "To understand the connections between various scientific fields"
    },
    {
      question: "Which of the following is an example of an interdisciplinary topic covered in Integrated Science?",
      options: ["Photosynthesis in plants", "The water cycle", "Newton's laws of motion", "The periodic table of elements"],
      correctOption: "The water cycle"
    },
    {
      question: "Integrated Science often emphasizes the importance of which skill?",
      options: ["Memorization", "Scientific inquiry and problem-solving", "Language proficiency", "Artistic creativity"],
      correctOption: "Scientific inquiry and problem-solving"
    },
    {
      question: "Which subject is least likely to be excluded from an Integrated Science curriculum?",
      options: ["Literature", "Biology", "Chemistry", "Physics"],
      correctOption: "Literature"
    },
    {
      question: "Integrated Science helps students understand real-world issues by:",
      options: ["Providing a narrow focus on one scientific discipline", "Ignoring the connections between science and technology", 
        " Exploring the interplay of different scientific principles", "Reducing the importance of practical applications"],
      correctOption: "Exploring the interplay of different scientific principles"
    },
    
    // ... (add more questions in the same format if needed)
  ];
  
export default function Unit3ex() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params?.fromResults) {
      setShowResults(true);
    }
  }, [route.params?.fromResults]);

  const handleSelectOption = (questionIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
  };

  const handleSubmit = () => {
    setShowResults(false);
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctOption) {
        score++;
      }
    });
    navigation.navigate('results1', { score, total: questions.length });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Unit 1 Exercises</Text>
      </View>
      {questions.map((question, questionIndex) => (
        <View key={questionIndex} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.question}</Text>
          {question.options.map((option, optionIndex) => (
            <TouchableOpacity
              key={optionIndex}
              style={[
                styles.optionButton,
                selectedAnswers[questionIndex] === option && styles.selectedOption,
                showResults && question.correctOption === option && styles.correctOption,
                showResults && selectedAnswers[questionIndex] === option && selectedAnswers[questionIndex] !== question.correctOption && styles.wrongOption
              ]}
              onPress={() => handleSelectOption(questionIndex, option)}
              disabled={showResults} // Disable selection after showing results
            >
              <Text style={styles.optionText}>
                {option}
                {showResults && selectedAnswers[questionIndex] === option && selectedAnswers[questionIndex] !== question.correctOption && (
                  <Icon name="times" style={styles.icon} /> // X icon for wrong answer
                )}
                {showResults && question.correctOption === option && (
                  <Icon name="check" style={styles.icon} /> // Check icon for correct answer
                )}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      {!showResults && <Button title="Submit" onPress={handleSubmit} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
  headingContainer: {
    marginBottom: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#cce5ff',
  },
  correctOption: {
    backgroundColor: '#d4edda',
    borderColor: '#28a745',
  },
  wrongOption: {
    backgroundColor: '#f8d7da',
    borderColor: '#dc3545',
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  icon: {
    marginLeft: 10,
    fontSize: 18,
  },
});
