import React from 'react';
import {View,StyleSheet,Text,FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Mapcard from './Mapcard';
import * as firebase from 'firebase' 

export default class Feed extends React.Component{
  constructor(){
    super();
    this.state={
      datas:[]
    }
  }

  fetchData = () =>{
    firebase
    .database()
    .ref('/location/')
    .on(
      'value',
      (snapshot) => {
          let datas = [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              datas.push({
                key: key,
                value: snapshot.val()[key],
              });
            });
          }
          this.setState({ datas: datas });
          this.props.setUpdateToFalse; 
        },
      );
  }
    
 
renderItem = ({ item: map }) => {
    // console.log('feed screen', story)
    return <Mapcard map={map} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();


  render(){
    return(
      <View style={styles.container}>
         <View style={styles.cardContainer}>
         <FlatList
         keyExtractor={this.keyExtractor}
         data={this.state.datas}
         renderItem={this.renderItem}
         />
         </View>
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