
import { useFonts } from 'expo-font';
import React from 'react';
import { } from 'react-native';
import Login from './component/Login/Login';
// import TodoApp from './component/TodoApp/TodoApp';

const getFont = () => Font.loadAsync({
 
})

export default function App() {
  const [loaded] = useFonts({
    'nunito-rgular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if(!loaded) {
    return null
  }
  
  return (
    <Login />
  );
}
