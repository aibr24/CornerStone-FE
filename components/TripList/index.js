import React from "react";
import { View, Text } from "react-native"; // remove unused import
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import { Content, List } from "native-base";
import { observer } from "mobx-react";
import AddButton from "../buttons/AddButton";

// clean your imports

const TripList = () => {
  const listoftrips = tripStore.trips.map((item) => (
    <TripItem trip={item} key={item.id} />
  ));

  return (
    <Content>
      <List>{listoftrips}</List>
      <AddButton />
    </Content>
  );
};

export default observer(TripList);
