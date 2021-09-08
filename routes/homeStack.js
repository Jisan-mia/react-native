// import { createStackNavigator } from 'react-navigation-stack';
// const screens = {
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       title: 'Review Zone',
//       // headerStyle: { backgroundColor: '#d9d7d7'}
//     }
//   },
//   ReviewDetails: {
//     screen: ReviewDetail,
//     navigationOptions: {
//       title: 'Review Details',
//       // headerStyle: { backgroundColor: '#d9d7d7'}
//     }
//   },
// }
// const HomeStack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerTintColor:  '#444',
//     headerStyle: { backgroundColor: '#d9d7d7', height: 80}
//   }
// })
// export default HomeStack
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import ReviewDetail from '../screens/ReviewDetail';

const Stack = createStackNavigator();

const HomeStack =() => {
  return (
       <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }}/>
          <Stack.Screen name="ReviewDetails" component={ReviewDetail} />
      </Stack.Navigator>
  );
}
export { HomeStack };

