import React from "react";
import { observer } from "mobx-react";

// Styles
import { BoxListContainer } from "./styles";
import ProfileTripItem from "./ProfileTripItem";

// Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import { List, View, Container } from "native-base";
import { ScrollView } from "react-native";

const ProfileTripList = () => {
  let listOfTrips = [];

  if (authStore.user)
    listOfTrips = tripStore.trips
      .filter((item) => item.userId !== authStore.user.id)
      .map((item) => <ProfileTripItem trip={item} key={item.id} />);
  return (
    <ScrollView>
      {/* <BoxListContainer>{listOfTrips}</BoxListContainer> */}
      {listOfTrips}
    </ScrollView>
  );
};

export default observer(ProfileTripList);
