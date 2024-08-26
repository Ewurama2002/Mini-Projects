import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Option from '../Option'


export default function Details2() {
  return (
    <View style={{padding:20,borderRadius:15,backgroundColor:'white'}}>
      <Image source={require('./science.jpeg')} style={{width:'100%', height:190, borderRadius:15}} />
      <Text style={{fontWeight:'500',fontSize:24}}>Integrated Science</Text>
      <View>
        <Option />
      </View>
      <View>
        <Text style={{fontWeight:'500',fontSize:20}}>
            Description
        </Text>
        <Text style={{color:'gray',lineHeight:23}}>
        Integrated Science is an interdisciplinary subject that combines concepts from various natural sciences, including physics, chemistry, biology, and earth science. 
        
         
        </Text>
      </View>
    </View>
  )
}