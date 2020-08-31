import React from "react";
import { View, Text } from "react-native";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import { Content, List } from "native-base";
import { observer } from "mobx-react";
import AddButton from "../buttons/AddButton";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";
// REVIEW: Organize your imports

const TripList = () => {
  const navigation = useNavigation();
  // REVIEW: The code below can be cleaned up, think about it
  // ANOTHER REVIEW: listoftrips should be camelCase
  let listoftrips = [];
  if (authStore.user) {
    listoftrips = tripStore.trips
      .filter((item) => item.userId == authStore.user.id)
      .map((item) => <TripItem trip={item} key={item.id} />);
  } else {
    navigation.navigate("Signin");
  }

  return (
    <Content>
      <List>{listoftrips}</List>
      <AddButton />
    </Content>
  );
};

export default observer(TripList);
