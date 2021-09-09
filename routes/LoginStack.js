import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';


const Stack = createStackNavigator();

const LoginStack =() => {
  return (
       <Stack.Navigator screenOptions={{
          headerShown: false
       }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen}  />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
  );
}
export default LoginStack ;