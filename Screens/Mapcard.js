import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import firebase from "firebase";

let customFonts = {
  "BubblegumSans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class Mapcard extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      map_id: this.props.map.key,
      map_data: this.props.area.value
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    // console.log(this.props.story)
    this._loadFontsAsync();
  }

  render(){ 
    let map = this.state.map_data
    if(!this.state.fontsLoaded){
      return(<AppLoading/>)
    }else{
    return(
      <TouchableOpacity 
      style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("Map screen", {
              map: map,
              map_id:this.state.map_id
            })
          }>
      <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.container}> 
          <Image source={require('../assets/MapImg.jpg')}/>
           <View style={styles.titleContainer}>
             <Text style={styles.titleText}>Dustbin Full!!</Text>
           </View>
        </View>
      </TouchableOpacity>  
    )
  }
  }
}

const styles = StyleSheet.create({

  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },

  container:{
     margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },

  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },

  titleText:{
    fontSize:RFValue(25),
    fontFamily:'BubblegumSans'
  }

})