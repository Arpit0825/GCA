import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native'
import Feed from './Screens/Feed';
import Profile from './Screens/Profile';
import Logout from './Screens/Logout';
import TabNavigator from './Navigation/TabNavigator';
import DrawerNavigator from './Navigation/DrawerNavigator'; 

const switchNavigator = createSwitchNavigator({
 Home:Feed,
 Profile:Profile,
 Logout:Logout
});

const AppNavigator = createAppContainer(switchNavigator);

export default function App() {
  return(
    <NavigationContainer>
  <DrawerNavigator/>
  </NavigationContainer>
  )
}
