import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = ({navigation}:any) => {
  return (
    <View>
      <Text>luis castillo</Text>
      <Button
      title='ir a navegacion de forms'
      onPress={()=>navigation.navigate("Downs")}
      />
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})