import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Option from '../Option'

export default function Details3() {
  return (
    <View style={{padding:20,borderRadius:15,backgroundColor:'white'}}>
      <Image source={require('./social.jpeg')} style={{width:'100%', height:190, borderRadius:15}} />
      <Text style={{fontWeight:'500',fontSize:24}}>Social Studies</Text>
      <View>
        <Option />
      </View>
      <View>
        <Text style={{fontWeight:'500',fontSize:20}}>
            Description
        </Text>
        <Text style={{color:'gray',lineHeight:23}}>
        Social Studies is an academic discipline that explores human society, focusing on the relationships between individuals and their communities, cultures, and environments. It encompasses various fields, including history, geography, civics, economics, and sociology, to provide a comprehensive understanding of societal structures and processes.         
        </Text>
      </View>
    </View>
  )
}