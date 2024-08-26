import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const questions = [
    {
      question: "Which of the following is NOT considered part of ICT?",
      options: ["Computers", "Smartphones", "Television", "Cooking appliances"],
      correctOption: "Cooking appliances"
    },
    {
      question: "What does the acronym ICT stand for?",
      options: ["International Computer Technology", "Information and Communication Technology", "Internet and Communication Tools", "Integrated Computer Technology"],
      correctOption: "Information and Communication Technology"
    },
    {
      question: "Which of the following is an example of software used in ICT?",
      options: ["Computer mouse", "Internet router", "Microsoft Word", "Smartphone"],
      correctOption: "Microsoft Word"
    },
    {
      question: "Which technology is used for wireless communication?",
      options: ["Ethernet", "Bluetooth", "Fiber optic cables", "HDMI cables"],
      correctOption: "Bluetooth"
    },
    {
      question: "What is the primary purpose of a router in a network?",
      options: ["To store data", "To connect multiple networks and direct data traffic", "To display information on a screen", "To print documents"],
      correctOption: "To connect multiple networks and direct data traffic"
    },
    {
      question: "Which protocol is commonly used to send emails over the internet?",
      options: ["HTTP", "FTP", "SMTP", "DNS"],
      correctOption: "SMTP"
    },
    {
      question: "Which of the following is an example of an input device?",
      options: ["Monitor", "Printer", "Keyboard", "Speaker"],
      correctOption: "Keyboard"
    },
    {
      question: "What does the term 'cloud computing' refer to?",
      options: ["Using physical servers located in the office", "Storing and accessing data over the internet rather than on local servers", "Using software that only runs on local devices", "Printing documents in the cloud"],
      correctOption: "Storing and accessing data over the internet rather than on local servers"
    },
    {
      question: "Which technology is essential for accessing the internet?",
      options: ["CPU", "Hard drive", "Modem", "RAM"],
      correctOption: "Modem"
    },
    {
      question: "Which of the following is a cybersecurity measure?",
      options: ["Antivirus software", "Spreadsheet application", "Web browser", "Operating system update"],
      correctOption: "Antivirus software"
    }
  ];
  
  
export default function Unit5ex() {
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
    navigation.navigate('results5', { score, total: questions.length });
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
