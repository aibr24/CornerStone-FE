import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../authentication/Signin";
import Singup from "../authentication/Signup";
import TripList from "../TripList";
import SignoutButton from "../buttons/SignoutButton";

const { Navigator, Screen } = createStackNavigator();

const RootNav = () => {
  return (
    <Navigator
      initialRouteName="Signin"
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
      <Screen
        name="Trips"
        component={TripList}
        options={{ headerRight: () => <SignoutButton /> }}
      />
    </Navigator>
  );
};

export default RootNav;
