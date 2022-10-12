import React, { useState, useEffect, useRef } from 'react'
import {
    SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
    FlatList, Dimensions, StatusBar,  
} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Divider } from 'react-native-paper';
import { auth,db } from '../Tutor/src/Screens/Firebase';
import ModelSearch from '../Tutor/src/Screens/ModelSearch';
const { width } = Dimensions.get("screen")
const cardWidth = width / 1.8
const HomeScreen = () => {
    const [ComName, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [filteredDataSource, setFilteredDataSource] = useState();
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [Student, setStudent] = useState([])

    const user = auth.currentUser.uid;
    useEffect(() => {
        db.ref('/Student').on('value', snap => {

            const Student = []
            snap.forEach(action => {
                const key = action.key
                const data = action.val()
                Student.push({
                    key: key,
                    IDnumber: data.IDnumber,
                    name: data.name,
                    surname: data.surname, UniversityName: data.UniversityName,
                    completed: data.completed, faculty: data.faculty,Status:data.Status,
                    monthNum: data.monthNum
                })
               
                 setStudent(Student)
                 setFilteredDataSource(Student);
                 setMasterDataSource(Student);
               
               

            })
        })
        db.ref('/TutorUsers/' + user).on('value', snap => {

            setName(snap.val() && snap.val().name);
            setPhonenumber(snap.val().phonenumber)
            setEmail(snap.val().email)
            
        })



    }, [])
    const [StudentsList, setStudentsList] = useState([]);
    const [StudentContainer, setStudentContainer] = useState('')
    const FilterFunction = (text) => {
        if (text) {
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.UniversityName ? item.UniversityName.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;

            })
            setStudentsList(newData)
            setStudentContainer(text)
        }
    }
    const updateAccept = (key,status,IDnumber,faculty,monthNum,UniversityName,name,surname) => {
        db.ref('Student').child(key).update({Status:status})
        .then(()=>db.ref('Student').once('value'))
        .then(snapshot=>snapshot.val())
        .catch(error => ({
          errorCode: error.code,
          errorMessage: error.message
        }))
        db.ref('AcceptedStudents').push({
            Status:'Accepted',
           IDnumber,faculty,monthNum,UniversityName,
           surname,name,user,ComName,email,phonenumber,
            Duties,location
          })
  
    }
    const bottomopen = useRef()
    const Card = ({ element, index }) => {
        return (
           <>
           <View style={{ margin: 20,backgroundColor: '#fff',elevation: 3 }}>
           <View style={{width:'100%'}}>
                      <View style={{ backgroundColor: 'gray', justifyContent: 'flex-start', flexDirection: 'row', padding: 8, alignItems:'center', borderBottomRightRadius:10}}>
                       
                        <Text style={{color: '#fff'}}>
                          Student Number:
                        </Text>
                        <Text style={{color: '#fff'}}>
                          {" "}{element.IDnumber}
                        </Text>
                      </View>
                    </View>

                    <Divider style={{width: 90, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>

                    {/* event type */}
                    <View style={{flexDirection:'row',}}>
                    <View style={{ backgroundColor: '#fff', justifyContent: 'flex-end', flexDirection: 'row', padding: 8, alignItems:'center'}}>
                      <Ionicons name="documents" color='#333' size={20} />
                      <Text style={{paddingHorizontal: 5,color:'#333'}}>
                       faculty of : {element.faculty} 
                      </Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', justifyContent:'flex-start', flexDirection: 'row', padding: 8, alignItems:'center'}}>
                    
                      <Text style={{paddingHorizontal: 5,color:'#333'}}>
                       Duration : {element.monthNum}  month
                      </Text>
                    </View>
                    </View>
                    <Divider style={{width: 120, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>

                    {/* date */}
                    <View style={{ backgroundColor: '#fff', justifyContent: 'flex-end', flexDirection: 'row', padding: 8, alignItems:'center' }}>
                      {/* <Feather
                        name="calendar" size={20}
                        style={{ paddingHorizontal: 5 }}
                        color='blue'
                      /> */}
                      <Text>University Name:</Text>
                      <Text style={{color:'blue', fontSize:12}}>
                        {element.UniversityName} 
                      </Text>
                    </View>

                    <Divider style={{width: 170, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>

                  {/* location */}
                  <View style={{flexDirection:'row'}}>
                  <View style={{ backgroundColor: '#fff', justifyContent: 'flex-end', flexDirection: 'row', padding: 8 , alignItems:'center'}}>
                    <View>
                    <Text>Name: </Text>
                    <Text style={{color:'#333'}}>
                      {element.name}
                    </Text>
                    </View>
                    <View>
                    <Text>Surname: </Text>
                    <Text style={{color:'#333'}}>
                      {element.surname}
                    </Text>
                    </View>
                  </View>
                  <View style={{ backgroundColor: '#fff', justifyContent:'flex-start', flexDirection: 'row', padding: 8 , alignItems:'center'}}>
                    <View>
                    <Text>modules Completed: </Text>
                    <Text style={{color:'#333'}}>
                      {element.completed}
                    </Text>
                    </View>
                    
                  </View>
                  </View>
                  <Divider style={{width: 200, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>

                  {/* description */}
                  <View style={{ justifyContent: 'center',  padding: 8,marginHorizontal:10 }}>
                  <TouchableOpacity style={styles.signinButton}
              onPress={()=>updateAccept(element.key,'Accepted',element.IDnumber,
              element.faculty,element.monthNum,element.UniversityName,element.name,
              element.surname)} >
                <Text style={styles.signinButtonText}
                
                >Accept</Text>
            </TouchableOpacity>
                  </View>
                  </View>
           </>)
    }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
    <StatusBar
        backgroundColor="#EC8F05"
        barStyle="light-content"
    />
    <View style={styles.headerContainer}
    >

        <Text style={styles.headerTitle}>{ComName} company</Text>
    </View>
    <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile', {
                email: email, name: ComName, phonenumber: phonenumber
            })}>
                <Image source={{ uri: 'https://image.shutterstock.com/image-vector/male-avatar-profile-picture-use-600w-193292033.jpg' }}
                    style={{ height: 50, width: 50, borderRadius: 25 }} />
            </TouchableOpacity>
            <Text style={{
                fontSize: 18, fontWeight: 'bold', marginLeft: 10,
                marginTop: 18
            }}>Welcome </Text>
            <Text style={{
                fontSize: 18, marginLeft: 10,
                marginTop: 18
            }}>{email}</Text>
        </View>
        {/* <TouchableOpacity onPress={navigation.navigate('Notification')}>
  <Ionicons name="notifications" size={24}/>
  </TouchableOpacity> */}
    </View>

    <View style={{
        marginTop: 20,
        flexDirection: 'row',
        paddingHorizontal: 20,
    }}>
        <TouchableOpacity style={styles.inputContainer}
            onPress={() => bottomopen.current.show()}>

            <Ionicons name="search" size={24} />

            <View
                style={{ fontSize: 18, flex: 1, marginLeft: 10 }}
            ><Text>Search by Faculty</Text></View>


        </TouchableOpacity>
    </View>
 
    <View style={{ paddingVertical: 20 }}>

        <Text style={styles.titles}>Choose by University</Text>

        <Picker
            selectedValue={StudentContainer}
            style={{ width: 300, height: 50, backgroundColor: '#eee' }}
            onValueChange={(value, id) => { FilterFunction(value) }}
        >
            <Picker.Item label="select" value="" />
            <Picker.Item label="TUT" value="TUT" />
            <Picker.Item label="UL" value="UL" />
            <Picker.Item label="UP" value="UP" />
            <Picker.Item label="UJ" value="UJ" />
            <Picker.Item label="Wits" value="Wits" />
            <Picker.Item label="UNISA" value="UNISA" />
        </Picker>
        <FlatList
            keyExtractor={(_, key) => key.toString()}
           horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20 }}
            data={StudentsList}
            renderItem={({ item, index }) => <Card element={item} index={index} />}
        />


    </View>
    <ModelSearch bottomopen={bottomopen} navigation={navigation} />

</SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})