import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Splash, WelcomeAuth, Register, Login} from '../pages';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
   <Stack.Navigator>
       <Stack.Screen name="Splash" component={Splash} />
       <Stack.Screen name="Login" component={Login} options={{ 
           headerShown:false
        }} />
       <Stack.Screen name="Register" component={Register} options={{ 
           headerShown:false
        }} />
       <Stack.Screen name="WelcomeAuth" component={WelcomeAuth}  options={{ 
           headerShown:false
        }}/>
   </Stack.Navigator>
  );
};

export default Router;
