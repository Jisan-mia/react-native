import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { AboutStack } from './aboutStack';
import { HomeStack } from './homeStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
  );
}

