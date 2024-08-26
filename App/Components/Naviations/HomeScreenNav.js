import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../Screens/Home'
import CourseDetails from '../../Screens/CourseDetails'
import Unit1e from '../CourseDeails/English/Unit1e'
import Unit2e from '../CourseDeails/English/Unit2e'
import Unit1ex from '../CourseDeails/English/Exercises/Unit1ex'
import MCQ1exScreen from '../CourseDeails/English/Exercises/MCQ1ex'
import Result from '../CourseDeails/English/Exercises/Results'
import CourseDetails1 from '../../Screens/CourseDetails1'
import Unit1 from '../CourseDeails/Math/Unit1'
import Unit2 from '../CourseDeails/Math/Unit2'
import Mathex from '../CourseDeails/Math/Mathex'
import Resuls from '../CourseDeails/Math/Results'
import CourseDetails2 from '../../Screens/CourseDetails2'
import Unit3e from '../CourseDeails/Science/Unit3e'
import Unit3ex from '../CourseDeails/Science/Unit3ex'
import Results from '../CourseDeails/Science/Results'
import CourseDetails3 from '../../Screens/CourseDetails3'
import Unit4e from '../CourseDeails/Social/Unit4e'
import Unit4ex from '../CourseDeails/Social/Unit4ex'
import Results4 from '../CourseDeails/Social/Results4'
import CourseDetails4 from '../../Screens/CourseDetails4'
import Unit5e from '../CourseDeails/ICT/Unit5e'
import Unit5ex from '../CourseDeails/ICT/Unit5ex'
import Results5 from '../CourseDeails/ICT/Results5'

const Stack = createNativeStackNavigator()

export default function HomeScreenNav() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='course-detail' component={CourseDetails} />
        <Stack.Screen name='unit1e' component={Unit1e} />
        <Stack.Screen name='unit2e' component={Unit2e} />
        <Stack.Screen name='unit1ex' component={Unit1ex} />
        <Stack.Screen name="MCQScreen" component={MCQ1exScreen} />
        <Stack.Screen name="ResultScreen" component={Result} />
        <Stack.Screen name='course-details' component={CourseDetails1} />
        <Stack.Screen name='unit1' component={Unit1} />
        <Stack.Screen name='unit2' component={Unit2} />
        <Stack.Screen name='math-ex' component={Mathex} />
        <Stack.Screen name='results' component={Resuls} />
        <Stack.Screen name='course-detailss' component={CourseDetails2} />
        <Stack.Screen name='unit3e' component={Unit3e} />
        <Stack.Screen name='unit3ex' component={Unit3ex} />
        <Stack.Screen name='results1' component={Results} />
        <Stack.Screen name='unit4e' component={Unit4e} />
        <Stack.Screen name='unit4ex' component={Unit4ex} />
        <Stack.Screen name='results4' component={Results4} />
        <Stack.Screen name='course-detailsss' component={CourseDetails3} />
        <Stack.Screen name='course-detailssss' component={CourseDetails4} />
        <Stack.Screen name='unit5e' component={Unit5e} />
        <Stack.Screen name='unit5ex' component={Unit5ex} />
        <Stack.Screen name='results5' component={Results5} />

    </Stack.Navigator>
  )
}