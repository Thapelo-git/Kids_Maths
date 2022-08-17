import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import {
  SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
  FlatList, Dimensions, ImageBackground, Picker, ActivityIndicator
} from 'react-native'

import Voice from '@react-native-community/voice';
export default function App() {
  const [isLoading, setLoading] = useState(false);
  const [Results, setResults] = useState('')
  const onSpeechStartHandler = (e) => {
      console.log('Start handler', e)
  }
  const onSpeechEndHandler = (e) => {
      setLoading(false)
      console.log('End handler', e)
  }
  const onSpeechResultsHandler = (e) => {
      let text = e.value[0]
      setResults(text)
      console.log('Results handler', e)
  }
  useEffect(() => {
      
      Voice.onSpeechStart = onSpeechStartHandler;
      Voice.onSpeechEnd = onSpeechEndHandler;
      Voice.onSpeechResults = onSpeechResultsHandler;
      return () => {
          Voice.destroy().then(Voice.removeAllListeners());
      }

  }, [])
 
  const startRecording = async () => {
      setLoading(true)
      try {
          await Voice.start('en-Us')
      } catch (error) {
          console.log('error occured', error)
      }
  }
  const stopRecording = async () => {
      setLoading(false)
      try {
          await Voice.stop()
      } catch (error) {
          console.log('error occured', error)
      }
  }
  return (
    <View style={styles.container}>
           <View style={{
                marginTop: 20,
                flexDirection: 'row',
                paddingHorizontal: 20,
            }}>
                <View style={styles.inputContainer}>

                    {/* <Ionicons name="search" size={24} /> */}

                    <TextInput
                        style={{ fontSize: 18, flex: 1, marginLeft: 10 }}
                        value={Results}
                        placeholder="Where to go ?"
                        onChangeText={(text) => searchFilterFunction(text)} />
                    {isLoading ? <ActivityIndicator size={24} color='red'/> :
                        <TouchableOpacity onPress={startRecording}>
                          <Text>Start</Text>
                        {/* <Ionicons name="mic" size={24} /> */}
                    </TouchableOpacity>}
                    <TouchableOpacity onPress={stopRecording}>
                      <Text>Stop</Text>
                        {/* <Ionicons name="mic-off" size={24} /> */}
                    </TouchableOpacity>
                </View>
            </View>
      <StatusBar style="auto" />
    </View>
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
