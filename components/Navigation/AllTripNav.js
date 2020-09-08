import React from "react";

// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import ProfileTripList from "../ProfileTripList";
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
          backgroundColor: "#393e46",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="OwnerProfile"
        component={OwnerProfile}
        options={({ route }) => {
          const { profile } = route.params;
          return {
            title: profile.user.username,
          };
        }}
      />
      <Stack.Screen
        name="Trips"
        component={ProfileTripList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Trip Detail"
        component={TripDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNav;
