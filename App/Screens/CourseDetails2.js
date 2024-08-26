import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Details2 from '../Components/CourseDeails/Science/Details2';
import Chapter from '../Components/CourseDeails/Science/Chapter';
import Exercises from '../Components/CourseDeails/Science/Exercises';

export default function CourseDetails2() {
    const navigation = useNavigation();
    return (
    <ScrollView style={{padding:20}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <Details2 />
        <Chapter />
        <Exercises />
    </ScrollView>
  )
}