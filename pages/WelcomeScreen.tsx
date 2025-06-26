import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/17525.jpg' }}
      style={styles.container}>
      <Text style={styles.txt}>Primera Actividad</Text>
      <Text style={styles.txt}>Nombre: Luis Castillo</Text>
      <Text style={styles.txt}>Usuario de GitHub: luiscr918</Text>
      <Button
        title='ir a navegacion de forms'
        onPress={() => navigation.navigate("Downs")}
      />
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 70,
  },
  txt: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold'
  }
})