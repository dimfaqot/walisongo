import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Splash, WelcomeAuth, Register, Login, Home, Djana, Ypp, SubMenu} from '../pages';
import { Settings } from '../pages/SubMenu';
import Menu from "../pages/SubMenu/Settings/Menu"
import Profile from "../pages/SubMenu/Settings/Profile"

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
   <Stack.Navigator initialRouteName='Splash'>
       {/* <Stack.Screen name="Splash" component={Splash} /> */}
       {/* <Stack.Screen name="WelcomeAuth" component={WelcomeAuth}  options={{ 
           headerShown:false
        }}/> */}
       <Stack.Screen name="Login" component={Login} options={{ 
           headerShown:false
        }} />
       {/* <Stack.Screen name="Register" component={Register} options={{ 
           headerShown:false
        }} /> */}
       <Stack.Screen name="Home" component={Home}  options={{ 
           headerShown:false
        }}/>
       <Stack.Screen name="Djana" component={Djana}  options={{ 
           headerShown:false
        }}/>
       <Stack.Screen name="Settings" component={Settings}  options={{ 
           headerShown:false
        }}/>
       <Stack.Screen name="Menu" component={Menu}  options={{ 
           headerShown:false
        }}/>
       <Stack.Screen name="Profile" component={Profile}  options={{ 
           headerShown:false
        }}/>

   </Stack.Navigator>
  );
};

export default Router;
