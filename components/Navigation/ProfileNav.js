import React from "react";

// Components
import Signin from "../authentication/Signin";
// REVIEW: Singup??
import Singup from "../authentication/Signup";
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
      initialRouteName="Signin"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#4c525c",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => <SignoutButton />,
      }}
    >
      <Stack.Screen name="MyTrips" component={TripList} />
      <Stack.Screen name="Trip Detail" component={TripDetail} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Singup} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileNav;