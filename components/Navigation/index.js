import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Components
import ProfileTripList from "../ProfileTripList";
import ProfileNav from "./ProfileNav";

// Styles
import EntypoIcon from "react-native-vector-icons/Entypo";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import AllTripNav from "./AllTripNav";
const { Navigator, Screen } = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Navigator
      initialRouteName="Profile"
      activeColor="white"
      barStyle={{ backgroundColor: "#111" }}
    >
      <Screen
        name="Trips"
        component={AllTripNav}
        options={{
          tabBarIcon: () => (
            <EntypoIcon name="paper-plane" color="#bbe1fa" size={20} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={ProfileNav}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <AntDesignIcon name="user" color="#bbe1fa" size={20} />
          ),
        }}
      />
    </Navigator>
  );
};

export default MyTabs;
