import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Details4 from '../Components/CourseDeails/ICT/Details4';
import Chapter4 from '../Components/CourseDeails/ICT/Chapter4';
import Exercises from '../Components/CourseDeails/ICT/Exercises';

export default function CourseDetails4() {
    const navigation = useNavigation();
  return (
    <ScrollView style={{padding:20}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <Details4 />
        <Chapter4 />
        <Exercises />
    </ScrollView>
  )
}