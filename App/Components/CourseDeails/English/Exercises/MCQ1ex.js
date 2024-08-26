import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const questions = [
  {
    question: "Which of the following is a vowel sound?",
    options: ["b", "a", "c", "d"],
    correctOption: "a"
  },
  {
    question: "Which of the following is a vowel sound?",
    options: ["j", "i", "k", "l"],
    correctOption: "i"
  },{
    question: "Which of the following is a vowel sound?",
    options: ["z", "x", "u", "f"],
    correctOption: "u"
  },{
    question: "Which of the following is a vowel sound?",
    options: ["i", "q", "w", "d"],
    correctOption: "i"
  },{
    question: "Which of the following is a vowel sound?",
    options: ["f", "g", "o", "b"],
    correctOption: "o"
  },{
    question: "Which of the following is a vowel sound?",
    options: ["l", "b", "c", "e"],
    correctOption: "e"
  },
  // ... (add more questions in the same format if needed)
];

export default function MCQ1ex() {
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
    navigation.navigate('ResultScreen', { score, total: questions.length });
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
