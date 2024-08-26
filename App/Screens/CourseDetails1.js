import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import Details1 from '../Components/CourseDeails/Math/Details1';
import Chapter1 from '../Components/CourseDeails/Math/Chapter1';
import Exercises from '../Components/CourseDeails/Math/Exercises';

export default function CourseDetails1() {
    const navigation = useNavigation();
    return (
      <ScrollView style={{padding:20}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <Details1 />
        <Chapter1 />
        <Exercises />
        </ScrollView>
  )
}