import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

//Styles
import AddTrip from "./AddTrip";
import { Content, List } from "native-base";

//Components
import TripItem from "./TripItem";

// Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const AllTrips = () => {
  const navigation = useNavigation();

  let listOfTrips = [];

  if (authStore.user)
    listOfTrips = tripStore.trips
      .filter((item) => item.userId !== authStore.user.id)
      .map((item) => <TripItem trip={item} key={item.id} />);

  return (
    <Content>
      <List>{listOfTrips}</List>
      <AddTrip />
    </Content>
  );
};

export default observer(AllTrips);
