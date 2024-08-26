import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Details from '../Components/CourseDeails/Details';
import Chapter from '../Components/CourseDeails/Chapter';
import Exercises from '../Components/CourseDeails/Exercises';

export default function CourseDetails() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{padding:20}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Ionicons name="arrow-back-circle" size={40} color="black" />
      </TouchableOpacity>
      <Details />
      <Chapter />
      <Exercises />
    </ScrollView>
  )
}