import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const Formulario1Screen = () => {
  const [text, setText] = React.useState("");
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: "https://4kwallpapers.com/images/walls/thumbs_3t/22691.jpg",
      }}
    >
      <Text>Registro de Usuario</Text>
      <View style={styles.inputDoble}>
        <TextInput
          style={styles.input}
          label="Nombre"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.input}
          label="Apellido"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <View style={styles.inputDoble}>
        <TextInput
          style={styles.input}
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.input}
          label="Teléfono"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <TextInput
        style={styles.input}
        label="Contraseña"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        style={styles.input}
        label="Confirmar Contraseña"
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </ImageBackground>
  );
};

export default Formulario1Screen;

const styles = StyleSheet.create({
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
  inputDoble:{
    backgroundColor:'#5dd05d',
    width:'100%',
  }
});
