import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../authentication/Signin";
import Singup from "../authentication/Signup";
import TripList from "../TripList";

const { Navigator, Screen } = createStackNavigator();

const RootNav = () => {
  return (
    <Navigator
      initialRouteName="Trips"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#4c525c",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Singup} />
      <Screen name="Trips" component={TripList} />
    </Navigator>
  );
};

export default RootNav;
