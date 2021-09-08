// import { createStackNavigator } from 'react-navigation-stack';
// const screens = {
//   About: {
//     screen: About,
//     navigationOptions: {
//       title: 'About Review Zone',
//       // headerStyle: { backgroundColor: '#d9d7d7'}
//     }
//   },
// }
// const AboutStack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerTintColor:  '#444',
//     headerStyle: { backgroundColor: '#d9d7d7', height: 80}
//   }
// })
// export default AboutStack
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import About from '../screens/About';


const Stack = createStackNavigator();

const AboutStack =() => {
  return (
       <Stack.Navigator screenOptions={{
        headerShown: false
       }}>
          <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
  );
}
export { AboutStack };

