import React from "react";
import { View, Text } from "react-native"; // remove unused imports
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../authentication/Signin";
import Singup from "../authentication/Signup";
import TripList from "../TripList";
import SignoutButton from "../buttons/SignoutButton";

// clean up imports

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
