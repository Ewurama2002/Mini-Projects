import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Home() {
  return (
    <View style={{backgroundColor:'blue',height:250,padding:20}}>
      <Header />
    </View>
  )
}