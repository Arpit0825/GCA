import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Collection extends React.Component{
  render(){
    return(
      <View style={styles.container}>
         <Text style={styles.text}>Collection</Text>
      </View>
    )}
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },

  text:{
    fontSize:RFValue(20)
  }
})