import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Option() {
  return (
    
     <View>
        <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
     }}>
        <Ionicons name="book-outline" size={24} color="black" />
        <Text>Chapters</Text>
     </View>
     <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',}}>
     <Feather name="book-open" size={24} color="black" />
     <Text style={{fontWeight:'bold'}}>Exercises</Text>
     </View>
     </View>

  )
}