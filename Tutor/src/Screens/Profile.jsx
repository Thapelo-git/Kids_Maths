
import React, { useState, useEffect, useRef } from 'react'
import {
    SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
    FlatList, Dimensions, StatusBar,  
} from 'react-native' 
import Feather from 'react-native-vector-icons/Feather'
import { auth,db } from './Firebase'

const Profile = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [Uid,setUid]=useState('')
   const user = auth.currentUser.uid;
    useEffect(() => {
        db.ref('/TutorUsers/' + user).on('value', snap => {

            setName(snap.val() && snap.val().fullname);
            setPhonenumber(snap.val().phonenumber)
            setEmail(snap.val().email)
            setUid(snap.val().uid)
        })

    }, [])
  return (
    <View style={styles.container}>
        
        <View style={{justifyContent:'center',alignItems:'center',marginVertical:60,width:'100%'}}>
    <TouchableOpacity style={{borderWidth:2,
        backgroundColor:'#fff',marginVertical:30, borderColor:'#000',width:200,height:70,
        justifyContent:'center',alignItems:'center',flexDirection:'row'}} onPress={()=>navigation.navigate('SignIn')}>
    <Text style={{color:'#000'}}>Student </Text>
    <Feather name="arrow-right" size={24} />
    </TouchableOpacity >

    <TouchableOpacity style={{borderWidth:2,
        backgroundColor:'#fff',marginVertical:30, borderColor:'#000',width:200,height:70,
        justifyContent:'center',alignItems:'center',flexDirection:'row'}} onPress={()=>navigation.navigate('SignUp')}>
    <Text style={{color:'#000'}}>Tutor</Text> 
    <Feather name="arrow-right" size={24} />  
    </TouchableOpacity>
     </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    borderbutton:{
        borderWidth:2,
        backgroundColor:'#fff',marginHorizontal:10,
        borderColor:'#000',width:150,height:70,
        justifyContent:'center',alignItems:'center'
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
      },
})