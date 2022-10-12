import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
const SignUp = () => {
  return (
    <View>
       <View style={{flex: 1}}>
    <ProgressSteps>
        <ProgressStep label="First Step">
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 1!</Text>
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
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})