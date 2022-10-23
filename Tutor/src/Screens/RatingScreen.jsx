import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Rating, AirbnbRating } from 'react-native-ratings';

const RatingScreen = () => {
  return (
    <View>
     <AirbnbRating
  count={10}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable"]}
  defaultRating={0}
  size={25}
/>
    </View>
  )
}

export default RatingScreen

const styles = StyleSheet.create({})