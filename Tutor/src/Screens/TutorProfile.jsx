import React,{useState} from 'react'
import { StyleSheet, Text, View ,StatusBar,SafeAreaView,TextInput,Image,
    TouchableOpacity} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
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
    initialValues={{name:'',phonenumber:'',email:'',password:'',confirmpassword:'',Duties:'',
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
        <ProgressStep label="First Step">
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
            </View>
        </ProgressStep>
        <ProgressStep label="Second Step">
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