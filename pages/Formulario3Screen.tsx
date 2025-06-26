import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from "react-native-paper";
import Entypo from '@expo/vector-icons/Entypo';
import { Switch } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
interface Satisfaccion {
  contacto: string;
  recomendacion: string;
  razon: string;
  permitirContacto: boolean;
}

export const Formulario3Screen = () => {
  const [encuestaPrub, setEncuestaPrub] = useState<Satisfaccion>({
    contacto: '',
    recomendacion: '',
    razon: '',
    permitirContacto: false
  })
  //funciones para el switch
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setEncuestaPrub({
      ...encuestaPrub,
      permitirContacto: !isSwitchOn
    })
  }
  const [opcion, setOpcion] = useState('si');

  //guardar
  const guardar = () => {
    let opcionescogida = opcion;
    setEncuestaPrub({
      ...encuestaPrub,
      recomendacion: opcionescogida
    })
    if (encuestaPrub.contacto.trim() === '' || encuestaPrub.razon.trim() === '') {
      Alert.alert("Error", "Complete todos los campos obligatiorios");
      return;
    }
    Alert.alert("Felicidades se ha guardado su encuesta con éxito",
      encuestaPrub.contacto + "\n"
      + "usted " + encuestaPrub.recomendacion + " recomienda el producto" + "\n"
      + "La razon de su recomendacion es: " + encuestaPrub.razon + "\n"
      + "Y usted " + (encuestaPrub.permitirContacto ? 'Si' : 'No') + " nos autoriza a utilizar su contacto"

    )
    setEncuestaPrub({
      ...encuestaPrub,
      contacto: '',
      recomendacion: '',
      razon: '',
      permitirContacto: false
    })
    setIsSwitchOn(false);
    setOpcion("si")
  }
  return (
    <ImageBackground
      style={styles.container}
      source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/15203.jpg' }}>
      <Text style={styles.title}>Encuesta de Satisfacción</Text>

      <TextInput
        style={styles.input}
        label="Contacto"
        value={encuestaPrub.contacto}
        onChangeText={(text) => setEncuestaPrub({
          ...encuestaPrub,
          "contacto": text
        })}
      />
      {/* recomendacion */}
      <Text style={{ color: '#ffffff' }}>¿Recomendarías el producto?</Text>
      <RadioButton.Group onValueChange={newValue => setOpcion(newValue)} value={opcion}>
        <View style={styles.radiobtnMain}>
          <View style={styles.radiobtn}>
            <Text style={{ color: '#ffffff' }}>Si</Text>
            <RadioButton
              uncheckedColor='#ffffff'
              color='#6be7fa'
              value="si" />
          </View>
          <View style={styles.radiobtn}>
            <Text style={{ color: '#ffffff' }}>No</Text>
            <RadioButton
              uncheckedColor='#ffffff'
              color='#6be7fa'
              value="no" />
          </View>
          <View style={styles.radiobtn}>
            <Text style={{ color: '#ffffff' }}>Quizas</Text>
            <RadioButton
              uncheckedColor='#ffffff'
              color='#6be7fa'
              value="quizas" />
          </View>
        </View>
      </RadioButton.Group>
      {/* razon */}
      <TextInput
        style={styles.input}
        label="Razon de la valoracion"
        value={encuestaPrub.razon}
        onChangeText={(text) => setEncuestaPrub({
          ...encuestaPrub,
          "razon": text
        })}
      />
      {/* Permitir contacto para seguimiento */}
      <Text style={{ fontSize: 20, color: '#ffffff' }}>Permitir contacto para seguimiento</Text>
      <View style={styles.permitirSection}>
        <Text style={{ color: '#ffffff' }}>NO</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color='#07baca' style={{ elevation: 30 }} />
        <Text style={{ color: '#ffffff' }}>SI</Text>
      </View>

      <TouchableOpacity
        onPress={guardar}
        style={styles.btn}>
        <Text style={{ fontSize: 30, color: '#ffffff' }}>Guardar</Text>
        <Entypo name="save" size={35} color="white" style={{ margin: 4 }} />
      </TouchableOpacity>
    </ImageBackground>
  )
}



const styles = StyleSheet.create({
  permitirSection: {
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 70,
  },
  title: {
    fontSize: 30,
    color: '#fdfcfc',
    elevation: 5,
    fontWeight: 'bold'
  },
  btn: {
    backgroundColor: '#ad0ba5',
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: '40%',
    height: 60,
    padding: 10,
    marginTop: 15

  },
  input: {
    width: "80%",
    height: 20,
    margin: 5,
  },
  radiobtn: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center'
  },
  radiobtnMain: {
    flexDirection: 'row',
    margin: 5
  }

})