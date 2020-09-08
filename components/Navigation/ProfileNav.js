import React from "react";

// Components
import Signin from "../authentication/Signin";

import SignoutButton from "../buttons/SignoutButton";

// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Profile";
import TripList from "../TripList";
import TripDetail from "../TripDetail";

const Stack = createStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#282c34",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => <SignoutButton />,
        // headerShown: false,
      }}
    >
      <Stack.Screen name="Trip Detail" component={TripDetail} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileNav;
