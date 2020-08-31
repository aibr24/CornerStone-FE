import React from "react";

// Components
import Signin from "../authentication/Signin";
// REVIEW: Singup??
import Singup from "../authentication/Signup";
import TripList from "../TripList";
import SignoutButton from "../buttons/SignoutButton";
import TripDetail from "../TripDetail";
import MyTabs from "./MyTabs";

// Navigators
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const RootNav = () => {
  return (
    <Navigator
      initialRouteName="Tabs"
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
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Singup} />
      <Screen
        name="Trips"
        component={TripList}
        options={{ headerRight: () => <SignoutButton /> }}
      />
      <Screen name="Trip Detail" component={TripDetail} />
      <Screen name="Tabs" component={MyTabs} />
    </Navigator>
  );
};

export default RootNav;
