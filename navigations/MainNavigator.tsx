import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../pages/WelcomeScreen";
import {Formulario1Screen} from "../pages/Formulario1Screen";
import {Formulario2Screen} from "../pages/Formulario2Screen";
import {Formulario3Screen} from "../pages/Formulario3Screen";
import { NavigationContainer } from "@react-navigation/native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Downs" component={MyDown} />
    </Stack.Navigator>
  );
};

const Down = createBottomTabNavigator();
const MyDown = () => {
  return (
    <Down.Navigator screenOptions={{ headerShown: false 
      ,tabBarStyle:{
         backgroundColor: 'transparent', 
         position:'absolute',   
          elevation: 0,                  
          borderTopWidth: 0,             
    }}}>
      <Down.Screen
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} color="white" />,
        }}
        name="Registro de Usuario Completo"
        component={Formulario1Screen}
      />
      <Down.Screen
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="directions" size={24} color="white" />
          ),
        }}
        name="Formulario de Direccion con Validacion"
        component={Formulario2Screen}
      />
      <Down.Screen
        options={{
          tabBarIcon: () => (
            <Entypo name="emoji-happy" size={24} color="white" />
          ),
        }}
        name="Encuesta de Satisfaccion Detallada"
        component={Formulario3Screen}
      />
    </Down.Navigator>
  );
};
export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
