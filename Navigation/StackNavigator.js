import React from 'react';
import{createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Collection from '../Screens/Collection';
import Alert from '../Screens/Alert';
 

const Stack = createStackNavigator();

const StackNavigator = () =>{ 
  return(
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{
    headerShown:false
    }}>
    <Stack.Screen name='Home' component={TabNavigator}/>
    <Stack.Screen name='Collection' component={Collection}/>
    <Stack.Screen name='Alert' component={Alert}/>
    </Stack.Navigator>
  );
};


export default StackNavigator;