import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import CourseList from '../Components/HomeScreen/CourseList'

export default function Home() {
  return (
    <ScrollView>
      <View style={{backgroundColor:'blue',height:250,padding:20}}>
      <Header />
    </View>
    <View style={{padding:10}}>
      <CourseList />
    </View>
    </ScrollView>  )
}