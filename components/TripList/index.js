import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

//Styles
import AddTrip from "./AddTrips";
import { Content, List } from "native-base";

//Components
import TripItem from "./TripItem";

// Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const TripList = () => {
  const navigation = useNavigation();

  let listOfTrips = [];

  // REVIEW: You can't throw navigation.navigate inside a component like this
  authStore.user
    ? (listOfTrips = tripStore.trips
        .filter((item) => item.userId == authStore.user.id)
        .map((item) => <TripItem trip={item} key={item.id} />))
    : navigation.navigate("Signin");

  return (
    <Content>
      <List>{listOfTrips}</List>
      <AddTrip />
    </Content>
  );
};

export default observer(TripList);
