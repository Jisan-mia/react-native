import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import LoginStack from '../../routes/LoginStack';

export default function Login () {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  }
})