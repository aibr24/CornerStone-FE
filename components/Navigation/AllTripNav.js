import React from "react";

// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import ProfileTripList from "../ProfileTripList/index";
import OwnerProfile from "../OwnerProfile";
const Stack = createStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="AllTrips"
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
      <Stack.Screen name="OwnerProfile" component={OwnerProfile} />
      <Stack.Screen name="AllTrips" component={ProfileTripList} />
    </Stack.Navigator>
  );
};

export default ProfileNav;
