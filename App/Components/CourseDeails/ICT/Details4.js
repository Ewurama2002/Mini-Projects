import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Option from '../Option'


export default function Details4() {
  return (
    <View style={{padding:20,borderRadius:15,backgroundColor:'white'}}>
      <Image source={require('./ICT.jpeg')} style={{width:'100%', height:190, borderRadius:15}} />
      <Text style={{fontWeight:'500',fontSize:24}}>Information and Communication Technology</Text>
      <View>
        <Option />
      </View>
      <View>
        <Text style={{fontWeight:'500',fontSize:20}}>
            Description
        </Text>
        <Text style={{color:'gray',lineHeight:23}}>
        Information and Communication Technology (ICT) refers to the use of technology to handle telecommunications, broadcast media, intelligent building management systems, and network-based control and monitoring functions.          
        </Text>
      </View>
    </View>
  )
}