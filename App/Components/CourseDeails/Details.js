import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Option from './Option'

export default function Details() {
  return (
    <View style={{padding:20,borderRadius:15,backgroundColor:'white'}}>
      <Image source={require('./download.jpeg')} style={{width:'100%', height:190, borderRadius:15}} />
      <Text style={{fontWeight:'500',fontSize:24}}>English</Text>
      <View>
        <Option />
      </View>
      <View>
        <Text style={{fontWeight:'500',fontSize:20}}>
            Description
        </Text>
        <Text style={{color:'gray',lineHeight:23}}>
        English, a rich and versatile language, is known for its vast vocabulary and global reach. Below, you'll
        find the necessary materials needed to study English language
        </Text>
      </View>
    </View>
  )
}