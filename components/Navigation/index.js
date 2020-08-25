import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../authentication/Signin";
import Singup from "../authentication/Signup";

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
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Singup} />
    </Navigator>
  );
};

export default RootNav;
