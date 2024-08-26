import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Option from '../Option'


export default function Details1() {
  return (
    <View style={{padding:20,borderRadius:15,backgroundColor:'white'}}>
      <Image source={require('./math.jpeg')} style={{width:'100%', height:190, borderRadius:15}} />
      <Text style={{fontWeight:'500',fontSize:24}}>Mathematics</Text>
      <View>
        <Option />
      </View>
      <View>
        <Text style={{fontWeight:'500',fontSize:20}}>
            Description
        </Text>
        <Text style={{color:'gray',lineHeight:23}}>
        Mathematics is the study of numbers, quantities, shapes, and patterns. It involves the use of logical reasoning, critical thinking, and problem-solving skills to understand and describe the world around us. 
         
        </Text>
      </View>
    </View>
  )
}