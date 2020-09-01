import React from "react";
import { observer } from "mobx-react";

//Styles
import { Content, List } from "native-base";

//Components
import TripItem from "./TripItem";

// Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const AllTrips = () => {
  let listOfTrips = [];

  if (authStore.user)
    listOfTrips = tripStore.trips
      .filter((item) => item.userId !== authStore.user.id)
      .map((item) => <TripItem trip={item} key={item.id} />);

  return (
    <Content>
      <List>{listOfTrips}</List>
    </Content>
  );
};

export default observer(AllTrips);
