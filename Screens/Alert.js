import React from 'react';
import {View,StyleSheet,Text,TextInput,TouchableOpacity,Image,SafeAreaView,Platform,StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import ImagePicker from './ImagePicker';

let customFonts = {
  'BubblegumSans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class Alert extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <SafeAreaView style={styles.safeView}/>
       <View style={styles.appTitle}>
        <View style={styles.logo}>
          <Image 
          source={require('../assets/GarbageCollectionLogo.jpg')}
          style={styles.logImg}/>        
        </View>
        <View styles={styles.titleContainer}>
          <Text style={styles.titleText}>User Entry</Text>
        </View>
      </View>  
         <TouchableOpacity style={styles.button}>
         <ImagePicker/>
         </TouchableOpacity>
      </View> 
    )}
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },

  safeView:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },

  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },

  titleContainer:{
    flex:0.7,
    justifyContent:'center',
    alignItems:'center',
  },

  titleText:{
    fontSize:RFValue(20),
    fontFamily:"BubblegumSans"
  },

  logo:{
    flex:0.3,
    justifyContent:'center', 
    alignItems:'center' 
  },

  logImg:{
    width:"120%",
    height:"120%",
    resizeMode:'contain'
  },

  button:{
    width:RFValue(300),
    height:RFValue(50)
  }
})