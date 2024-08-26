import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={{}}>
      {/* image goes here */}
    <View style={{padding:20}}>
    <Text style={{color:'white'}}>Welcome</Text>
    <Text style={{color:"white",fontSize:20,fontFamily:'Outfit'}}>Brian Williams</Text>
    </View>

    <View style={{backgroundColor:'white',padding:15,display:'flex',flexDirection:'row',justifyContent:'space-between',
        paddingRight:5,
        borderRadius:99,
        marginTop:25,
    }}>
        <TextInput placeholder='Search Courses' style={{fontFamily:'Outfit',fontSize:18}}  />
        <Ionicons name="search" size={24} color="black" />
    </View>
    </View>
  )
}