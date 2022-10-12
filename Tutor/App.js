import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/Screens/SplashScreen';


const Stack = createNativeStackNavigator()
export default function App() {
//   const [signedIn,setSignedIn]=useState(false)

//   auth.onAuthStateChanged((user)=>{
//     if(user){
//         setSignedIn(true);
//        console.log(user.uid,"user------------")
     
//     }else{
     
//         setSignedIn(false);
//     }
// });
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
