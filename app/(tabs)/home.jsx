import { View, Text } from 'react-native'
import React from 'react'
import { processFontFamily } from 'expo-font'

export default function home() {
  return (
    <View>
      <Text sytle = {{fontSize: 40,fontFamily:'outfit-bold'}}>home</Text>
      <Text sytle = {{fontSize: 40,fontFamily:'outfit-extrabold'}}>@ HOME</Text>
    </View>
  )
}