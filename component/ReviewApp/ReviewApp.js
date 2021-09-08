import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from '../../routes/drawer';

const Drawer = createDrawerNavigator();

export default function ReviewApp() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}