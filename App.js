import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './App/Screens/Welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './App/Screens/Login';
import Signup from './App/Screens/Signup';
import ForgotPassword from './App/Screens/ForgotPassword';
import Home from './App/Screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MyCourse from './App/Screens/MyCourse';

import Profile from './App/Screens/Profile';
import HomeScreenNav from './App/Components/Naviations/HomeScreenNav';
import { UserProvider } from './App/UserContext/UserContext';
import EditProfile from './App/Screens/EditProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: 'white',
          height: 78,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingBottom: 10,
          paddingTop:10,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'my-course') {
            iconName = 'book';
          } else if (route.name === 'leaderboard') {
            iconName = 'trophy';
          } else if (route.name === 'profile') {
            iconName = 'person';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenNav}
      />
      <Tab.Screen
        name="my-course"
        component={MyCourse}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='SignUp' component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen name='Homes' component={HomeScreenNav} options={{ headerShown: false }} />
      <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} />
      </Stack.Navigator>
   </NavigationContainer>
    </UserProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
});
