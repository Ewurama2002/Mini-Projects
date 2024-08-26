import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Details3 from '../Components/CourseDeails/Social/Details3';
import Chapter from '../Components/CourseDeails/Social/Chapter';
import Exercises from '../Components/CourseDeails/Social/Exercises';


export default function CourseDetails3() {
    const navigation = useNavigation();
    return (
    <ScrollView style={{padding:20}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <Details3 />
        <Chapter />
        <Exercises />
    </ScrollView>
  )
}