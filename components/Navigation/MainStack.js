import React from "react";

// Components
import Signin from "../authentication/Signin";

// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import MyTabs from ".";

const Stack = createStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerShown: false,
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#282c34",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
};

export default ProfileNav;
