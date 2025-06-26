import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import Entypo from '@expo/vector-icons/Entypo';
interface Usuario {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  contrasenia: string;
}
export const Formulario1Screen = () => {
  //objeto con mis datos
  const [usuarioPrueba, setUsuarioPrueba] = useState<Usuario>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    contrasenia: ''
  })
  //conf contraseña
  const [confContra, setConfContra] = useState("");
  //guardar
  const guardar = () => {
    if (usuarioPrueba.nombre.trim() === '' || usuarioPrueba.apellido.trim() === ''
      || usuarioPrueba.email.trim() === '' || usuarioPrueba.telefono.trim() === ''
      || usuarioPrueba.contrasenia.trim() === '' || confContra.trim() == '') {
      Alert.alert("Error", "Por favor llene todos los campos");
      return;
    }
    if (confContra != usuarioPrueba.contrasenia) {
      Alert.alert("Error", "Los campo de contraseña no coinciden");
      return;
    }
    Alert.alert("Felicidades", "Te registraste correctamente: "
      + usuarioPrueba.nombre.concat(" ", usuarioPrueba.apellido) + "\n"
      + usuarioPrueba.email + "\n"
      + usuarioPrueba.telefono
    )
    setUsuarioPrueba({
      ...usuarioPrueba,
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      contrasenia: ''
    })
    setConfContra('')
  }
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: "https://4kwallpapers.com/images/walls/thumbs_3t/22691.jpg",
      }}
    >
      <Text style={styles.title}>Registro de Usuario</Text>
      <View style={styles.inputDoble}>
        <TextInput
          style={{
            ...styles.input,
            width: '40%'
          }}
          label="Nombre"
          value={usuarioPrueba.nombre}
          onChangeText={(text) => setUsuarioPrueba({
            ...usuarioPrueba,
            "nombre": text
          })}
        />
        <TextInput
          style={{
            ...styles.input,
            width: '40%'
          }}
          label="Apellido"
          value={usuarioPrueba.apellido}
          onChangeText={(text) => setUsuarioPrueba({
            ...usuarioPrueba,
            "apellido": text
          })}
        />
      </View>
      <View style={styles.inputDoble}>
        <TextInput
          style={{
            ...styles.input,
            width: '40%'
          }}
          label="Email"
          value={usuarioPrueba.email}
          onChangeText={(text) => setUsuarioPrueba({
            ...usuarioPrueba,
            "email": text
          })}
        />
        <TextInput
          style={{
            ...styles.input,
            width: '40%'
          }}
          label="Teléfono"
          value={usuarioPrueba.telefono}
          onChangeText={(text) => {
            if (/^\d{0,10}$/.test(text)) {
              setUsuarioPrueba({
                ...usuarioPrueba,
                "telefono": text
              })
            } else {
              Alert.alert("Solo se permiten numeros y solo numeros de 10 caracteres")
              return;
            }
          }
          }
        />
      </View>
      <TextInput
        style={styles.input}
        label="Contraseña"
        value={usuarioPrueba.contrasenia}
        onChangeText={(text) => setUsuarioPrueba({
          ...usuarioPrueba,
          "contrasenia": text
        })}
      />
      <TextInput
        style={styles.input}
        label="Confirmar Contraseña"
        value={confContra}
        onChangeText={(text) => setConfContra(text)}
      />
      <TouchableOpacity
        onPress={guardar}
        style={styles.btn}>
        <Text style={{ fontSize: 30, color: '#ffffff' }}>Guardar</Text>
        <Entypo name="save" size={35} color="white" style={{ margin: 4 }} />
      </TouchableOpacity>

    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#e478ed',
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 70,
  },
  input: {
    width: "80%",
    height: 20,
    margin: 5,

  },
  inputDoble: {
    flexDirection: 'row',
    padding: 4
  },
  title: {
    fontSize: 40,
    color: '#fdfcfc',
    elevation: 5,
    fontWeight: 'bold'
  }
});
