import { View, Text, Image, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../../UserContext/UserContext';

export default function Header() {

  const { user } = useContext(UserContext);
  return (
    <View style={{}}>
      {/* image goes here */}
    <View style={{padding:20}}>
    <Text style={{color:'white',display:'flex',flexDirection:'row',fontSize:25}}>Welcome,</Text>
    <Text style={{color: 'white',display:'flex',flexDirection:'row',fontSize:40,fontStyle:'italic'}}>{user?.displayName || 'Username'}</Text>
    </View>
    </View>
  )
}