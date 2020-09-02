import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Components
import ProfileTripList from "../ProfileTripList";
import ProfileNav from "./ProfileNav";

// Styles
import EntypoIcon from "react-native-vector-icons/Entypo";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import OwnerProfile from "../OwnerProfile";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Navigator initialRouteName="Profile" activeColor="white">
      {/* <Screen
        name="AllTrips"
        component={ProfileTripList}
        options={{
          tabBarIcon: () => (
            <EntypoIcon name="paper-plane" color="white" size={20} />
          ),
        }}
      /> */}
      <Screen
        name="OwnerProfile"
        component={OwnerProfile}
        options={{
          tabBarIcon: () => (
            <EntypoIcon name="paper-plane" color="white" size={20} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={ProfileNav}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <AntDesignIcon name="user" color="white" size={20} />
          ),
        }}
      />
    </Navigator>
  );
};

export default MyTabs;
