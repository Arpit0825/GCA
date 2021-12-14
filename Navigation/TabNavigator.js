import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import Feed from '../Screens/Feed';
import Collection from '../Screens/Collection';
import Alert from '../Screens/Alert';

const Tab = createMaterialBottomTabNavigator();

const BottonTabNavigator = () => {
    return (
          <Tab.Navigator 
          labled={false}
          barStyle={styles.bottomTabStyle} 
          screenOptions={({route})=>({ 
              tabBarIcon : ({focused,color,size})=>{ 
                let iconName;
                if (route.name === 'Feed') {
                        iconName = focused ? 'home' : 'home-outline';
                    }else if(route.name === 'Collection'){
                  iconName = focused ? 'trash' : 'trash-outline';
                }else if(route.name === 'Alert'){
                  iconName = focused ? 'alert-circle' : 'alert-circle-outline'
                } 
    
              return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icon} />;
                    },
            }
          )} 

          activeColor={'tomato'}
          inactiveColor={'gray'}
          >

            <Tab.Screen 
            name='Feed' 
            component={Feed}>
            </Tab.Screen>

            <Tab.Screen 
            name='Collection' 
            component={Collection}>
            </Tab.Screen>

            <Tab.Screen
            name='Alert'
            component={Alert}>
            </Tab.Screen>

            </Tab.Navigator>
    );
}
    
    const styles = StyleSheet.create({
      bottomTabStyle:{
          backgroundColor:'#2f345d',
          height:'8%',
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
          overflow:'hidden',
          position:'absolute'
        },

        icon:{
          width:RFValue(30),
          height:RFValue(30)
        }
    });

export default BottonTabNavigator ;    