import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Results4() {
  const route = useRoute();
  const navigation = useNavigation();
  const { score, total } = route.params;

  const handleGoBack = () => {
    navigation.navigate('unit4ex', { fromResults: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Your Score: {score} / {total}</Text>
      <Button title="Go Back to Questions" onPress={handleGoBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 20,
  },
});
