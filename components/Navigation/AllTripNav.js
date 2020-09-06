import React from "react";

// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import ProfileTripList from "../ProfileTripList/index";
import OwnerProfile from "../OwnerProfile";
import TripDetail from "../TripDetail";

const Stack = createStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator
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
      <Stack.Screen name="OwnerProfile" component={OwnerProfile} />
      <Stack.Screen name="Trips" component={ProfileTripList} />
      <Stack.Screen name="Trip Detail" component={TripDetail} />
    </Stack.Navigator>
  );
};

export default ProfileNav;
