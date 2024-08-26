import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SubHeading from './SubHeading'
import Courses from './Courses'


export default function CourseList() {
  return (
    <View>
      <SubHeading />
      <Courses/>
    </View>
  )
}