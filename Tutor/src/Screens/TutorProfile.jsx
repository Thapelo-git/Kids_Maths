import React,{useState} from 'react'
import { StyleSheet, Text, View ,StatusBar,SafeAreaView,TextInput,Image,
    TouchableOpacity} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Picker} from '@react-native-picker/picker';
import { Formik } from 'formik'
import * as yup from 'yup'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { auth,db } from './Firebase'
const TutorProfile = ({navigation,route}) => {
    const [name,setName]=useState(route.params.name)
    const [email,setEmail]=useState(route.params.email)
    const [phonenumber,setphonenumber]=useState(route.params.phonenumber)
    const [uid,setUid]=useState(route.params.uid)
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const ReviewSchem=yup.object({
        name:yup.string().required().min(2),
        phonenumber:yup.string().required().matches(phoneRegExp,'Phone number is not valid'),
        email:yup.string().required().min(6),
        location:yup.string().required().min(6),
        Gender:yup.string()
    })
    const editprofile=()=>{
  
    db.ref('users').child(uid).update({name,email,phonenumber})
        .then(()=>db.ref('users').once('value'))
        .then(snapshot=>snapshot.val())
        .catch(error => ({
          errorCode: error.code,
          errorMessage: error.message
        }));
      }
  return (
    <Formik
    initialValues={{name:'',phonenumber:'',email:'',Gender:'Male',
    location:'',contactPerson:''}}
    validationSchema={ReviewSchem}
    onSubmit={(values,action)=>{
        action.resetForm()
        editprofile(values)
    }}
    >
        {(props)=>(
            <>
   
        <View style={{flex: 1,  backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',width:'100%'}}>
    <ProgressSteps>
        <ProgressStep label="About">
            <View style={{ alignItems: 'center' }}>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather name="user" size={22}
                    color='#000'
                    style={{marginRight:10}}/>
                    
                    <TextInput placeholder="FullName"
                    selectionColor='gainsboro'
                    style={styles.inputText}
                    onChangeText={(text)=>setName(text)}
                    
                    value={name}
                    onBlur={props.handleBlur('fullname')}
                    />
                </View>
            </View>
            <Text style={{color:'red',marginTop:-10}}>{props.touched.fullname && props.errors.fullname}</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather name="mail" size={22}
                    color='#000'
                    style={{marginRight:10}}/>
                    
                    <TextInput placeholder="email@gmail.com"
                    selectionColor='gainsboro'
                    style={styles.inputText}
                    keyboardType='email-address'
                    onChangeText={(text)=>setEmail(text)}
             value={email}
             onBlur={props.handleBlur('email')}
                    />
                </View>
            </View>
            <Text style={{color:'red',marginTop:-15}}>{props.touched.email && props.errors.email}</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather name="phone" size={22}
                    color='#000'
                    style={{marginRight:10}}/>
                    
                    <TextInput placeholder="Phone number"
                    selectionColor='gainsboro'
                    style={styles.inputText}
                    keyboardType='numeric'
                    onChangeText={(text)=>setphonenumber(text)}
             value={phonenumber}
             onBlur={props.handleBlur('phonenumber')}
                    />
                </View>
            </View>
            <Text style={{color:'red',marginTop:-15}}>{props.touched.phonenumber && props.errors.phonenumber}</Text>
            <Text style={{marginVertical:10}}>Gender</Text>

<Picker
    selectedValue={props.values.Gender}
    style={{ width: 300, height: 50, backgroundColor: '#eee' }}
    onValueChange={props.handleChange('Gender')}   
             onBlur={props.handleBlur('Gender')}
>
    <Picker.Item label="Male" value="Male" />
    <Picker.Item label="Female" value="Female" />
</Picker>
<Text style={{marginVertical:10}}>Enter your city</Text>
<View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Ionicons name="location" size={22}
                    color='#000'
                    style={{marginRight:10}}/>
                    
                    <TextInput placeholder="City"
                    selectionColor='gainsboro'
                    style={styles.inputText}
                    keyboardType='numeric'
                    onChangeText={props.handleChange('location')}
             value={props.values.location}
             onBlur={props.handleBlur('location')}
                    />
                </View>
            </View>
            <Text style={{color:'red',marginTop:-15}}>{props.touched.location && props.errors.location}</Text>
            </View>
        </ProgressStep>
        <ProgressStep label="Tutoring Details">
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 2!</Text>
            </View>
        </ProgressStep>
        <ProgressStep label="Third Step">
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 3!</Text>
            </View>
        </ProgressStep>
    </ProgressSteps>
</View>
    
    </>
            )}
        </Formik>
  )
}

export default TutorProfile

const styles = StyleSheet.create({
    inputContainer:{
     backgroundColor:'#fff',
marginVertical:10,
borderWidth:1,
borderColor:'#000',
justifyContent:'center',
width:'100%'
    },
    inputSubContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    inputText:{
        fontSize:18,
        textAlignVertical:'center',
        padding:0,
        height:60,
        color:'#000',
       

    },
})