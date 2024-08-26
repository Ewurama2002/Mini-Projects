import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Courses() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.firstrow}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('course-detail')}>
          <Image style={styles.boxImage} source={require('./download.jpeg')} />
          <Text style={styles.boxText}>English</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondrow}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('course-details')}>
          <Image style={styles.boxImage} source={require('./math.jpeg')} />
          <Text style={styles.boxText}>Mathematics</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.thirdrow}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('course-detailss')}>
          <Image style={styles.boxImage} source={require('./science.jpeg')} />
          <Text style={styles.boxText}>Integrated Science</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fourthrow}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('course-detailsss')}>
          <Image style={styles.boxImage} source={require('./social.jpeg')} />
          <Text style={styles.boxText}>Social Studies</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fifthrow}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('course-detailssss')}>
          <Image style={styles.boxImage} source={require('./ICT.jpeg')} />
          <Text style={styles.boxText}>I.C.T</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  box: {
    flex: 1,
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    borderRadius: 8,
  },
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  secondrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  thirdrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  fourthrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  fifthrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  boxText: {
    color: '#000',
    fontSize: 16,
    marginTop: 8,
    fontWeight:'bold',
    color: 'blue',
  },
  boxImage: {
    width: '90%',
    height: '50%',
    borderRadius: 20,
    alignSelf: 'center',
    
  },
});
