import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../Screens/Profile";
import Logout from "../Screens/Logout";
// import firebase from "firebase";


const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  

  render() {
    let props = this.props;
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    );
  }
}
