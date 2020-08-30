import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Profile from "../Profile";
import TripList from "../TripList";
import EntypoIcon from "react-native-vector-icons/Entypo";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="white">
      <Tab.Screen
        name="Trips"
        component={TripList}
        options={{
          tabBarIcon: () => (
            <EntypoIcon name="paper-plane" color="white" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarcolor: "white",
          tabBarIcon: () => (
            <AntDesignIcon name="user" color="white" size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
