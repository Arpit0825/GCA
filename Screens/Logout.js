import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import firebase from 'firebase';
import DrawerNavigator from '../Navigation/DrawerNavigator';

export default class Logout extends React.Component{
  componentDidMount(){
    firebase.auth().signOut();
  }

  render(){
    return(
      <View style={styles.container}>
      <Text>Logout</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor:'#15193c'
  }
})