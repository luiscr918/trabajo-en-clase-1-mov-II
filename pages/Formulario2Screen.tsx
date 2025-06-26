import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import Entypo from '@expo/vector-icons/Entypo';
import { Switch } from 'react-native-paper';
interface Direccion {
  calle: string;
  numeroExterior: number;
  ciudad: string;
  referencias?: string;
  direccionFiscal: boolean;
}
export const Formulario2Screen = () => {

  //funciones para el switch
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setDireccionPrub({
      ...direccionPrub,
      direccionFiscal: !isSwitchOn
    })
  }

  const [direccionPrub, setDireccionPrub] = useState<Direccion>({
    calle: '',
    numeroExterior: 0,
    ciudad: '',
    referencias: '',
    direccionFiscal: isSwitchOn
  })
  //guardar
  const guardar = () => {
    if (direccionPrub.calle.trim() === '' || direccionPrub.ciudad.trim() === '' || direccionPrub.numeroExterior === 0) {
      Alert.alert("Error", "Por favor complete los campos obligatorios");
      return;
    }
    Alert.alert("Felicidades", "Datos guardados correctamente" + "\n"
      + "Su direccion es:" + "\n"
      + direccionPrub.calle + "," + direccionPrub.ciudad + "," + direccionPrub.numeroExterior + "," + direccionPrub.referencias + "\n"
      + (direccionPrub.direccionFiscal ? 'Es Direccion Fiscal' : 'No es Dirección Fiscal')
    )
    setDireccionPrub({
      ...direccionPrub,
      calle: '',
      numeroExterior: 0,
      ciudad: '',
      referencias: '',
      direccionFiscal: false
    })
    setIsSwitchOn(false);
  }
  return (
    <ImageBackground source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/14395.jpg' }}
      style={styles.container}
    >
      <Text style={styles.title}>Registro de Direccion</Text>
      <TextInput
        style={styles.input}
        label="Calle"
        placeholder='Ingrese su calle'
        value={direccionPrub.calle}
        onChangeText={text => setDireccionPrub({
          ...direccionPrub,
          "calle": text
        })}
      />
      <TextInput
        style={styles.input}
        keyboardType='number-pad'
        label="Numero Exterior"
        placeholder='Ingrese su numero exterior'
        value={direccionPrub.numeroExterior.toString()}
        onChangeText={text => {
          if (/^\d*$/.test(text)) {
            setDireccionPrub({
              ...direccionPrub,
              "numeroExterior": parseInt(text)
            })
          } else {
            Alert.alert("Error", "Solo se admiten numeros");
            return;
          }
        }
        }
      />
      <TextInput
        style={styles.input}
        label="Ciudad"
        placeholder='Ingrese su ciudad'
        value={direccionPrub.ciudad}
        onChangeText={text => setDireccionPrub({
          ...direccionPrub,
          "ciudad": text
        })}
      />
      <TextInput
        style={styles.input}
        label="Referencias"
        placeholder='Ingrese sus referencias'
        value={direccionPrub.referencias}
        onChangeText={text => setDireccionPrub({
          ...direccionPrub,
          "referencias": text
        })}
      />
      {/* direccion fiscal */}
      <Text style={{ fontSize: 20, color: '#ffffff' }}>Es dirección Fiscal?</Text>
      <View style={styles.fiscalSection}>
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
  fiscalSection: {
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
    fontSize: 40,
    color: '#fdfcfc',
    elevation: 5,
    fontWeight: 'bold'
  },
  input: {
    width: "80%",
    height: 20,
    margin: 5,

  },
  btn: {
    backgroundColor: '#8ee3f0',
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

})