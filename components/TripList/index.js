import React from "react";
import { View, Text } from "react-native";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import { Content, List } from "native-base";
import { observer } from "mobx-react";
import AddButton from "../buttons/AddButton";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";

const TripList = () => {
  const navigation = useNavigation();
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
