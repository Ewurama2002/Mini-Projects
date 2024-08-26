import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const questions = [
    {
      question: "What is self-identity?",
      options: [
        "The perception others have of you",
        "The process of understanding one's own characteristics, beliefs, and values",
        "A fixed and unchangeable view of oneself",
        "The knowledge of external events"
      ],
      correctOption: "The process of understanding one's own characteristics, beliefs, and values"
    },
    {
      question: "Which of the following factors most directly shapes a person's self-identity?",
      options: [
        "Weather patterns",
        "Personal experiences and introspection",
        "Economic conditions",
        "Physical environment"
      ],
      correctOption: "Personal experiences and introspection"
    },
    {
      question: "Which of the following is a component of self-identity?",
      options: [
        "Financial status",
        "Personality traits",
        "Dietary preferences",
        "Time management skills"
      ],
      correctOption: "Personality traits"
    },
    {
      question: "Self-identity can be influenced by external factors. Which of the following is an example of such a factor?",
      options: [
        "Genetic makeup",
        "Physical fitness level",
        "Cultural background and societal expectations",
        "Age"
      ],
      correctOption: "Cultural background and societal expectations"
    },
    {
      question: "A strong, positive self-identity is important because it:",
      options: [
        "Determines one's academic success",
        "Guarantees a high income",
        "Contributes to personal well-being and self-esteem",
        "Ensures popularity in social circles"
      ],
      correctOption: "Contributes to personal well-being and self-esteem"
    },
    {
      question: "Which of the following statements is true about self-identity?",
      options: [
        "It is solely determined by one's physical appearance.",
        "It remains completely static throughout a person's life.",
        "It is an ongoing process that can evolve over time.",
        "It is not influenced by relationships or social interactions."
      ],
      correctOption: "It is an ongoing process that can evolve over time."
    },
    {
      question: "The concept of self-identity helps individuals:",
      options: [
        "Solve mathematical problems",
        "Develop a sense of belonging and purpose",
        "Memorize historical facts",
        "Avoid emotional experiences"
      ],
      correctOption: "Develop a sense of belonging and purpose"
    },
    {
      question: "A person's self-identity is LEAST likely to be influenced by:",
      options: [
        "Their favorite color",
        "Their family and upbringing",
        "The media they consume",
        "Their friendships and social networks"
      ],
      correctOption: "Their favorite color"
    },
    {
      question: "Which of the following best describes an aspect of self-identity?",
      options: [
        "The food one eats",
        "Personal values and beliefs",
        "The brand of clothes one wears",
        "The time one wakes up"
      ],
      correctOption: "Personal values and beliefs"
    },
    {
      question: "Which of the following can help individuals develop a strong self-identity?",
      options: [
        "Conforming to societal norms without question",
        "Reflecting on personal experiences and values",
        "Avoiding interactions with others",
        "Ignoring feedback from family and friends"
      ],
      correctOption: "Reflecting on personal experiences and values"
    }
  ];
  
  
export default function Unit4ex() {
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
    navigation.navigate('results4', { score, total: questions.length });
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
