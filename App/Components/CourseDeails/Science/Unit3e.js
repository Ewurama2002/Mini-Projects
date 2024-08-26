import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function Unit3e() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}> Introduction to Integrated Science</Text>
      <Text style={styles.content}> 
        {'\n'}
        Integrated Science is an educational approach that merges multiple branches of natural sciences, such as biology, chemistry, physics, and earth science, into a unified curriculum. This interdisciplinary method emphasizes the interconnections between these disciplines, allowing students to develop a broader understanding of scientific principles. Unlike traditional science education, which often segregates subjects, Integrated Science presents a more cohesive view of how scientific concepts interact in the natural world. This integration helps students appreciate the complexity and interrelatedness of scientific phenomena, providing a foundation for more advanced studies and practical applications.        {'\n\n'}
        
        {'\n'}
        The curriculum of Integrated Science typically includes a variety of topics that demonstrate how different scientific principles come together to explain natural processes. For example, students might explore the water cycle, which involves understanding concepts from meteorology, chemistry, and environmental science. They might also study ecosystems, which require knowledge of biology, ecology, and earth sciences. This comprehensive approach not only aids in understanding the material but also encourages critical thinking and problem-solving skills. Students learn to approach scientific questions from multiple angles, considering the impact and contributions of various scientific disciplines.
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
