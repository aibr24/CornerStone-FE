import React from "react";

import { observer } from "mobx-react";

import { BoxListContainer } from "./styles";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import ProfileTripItem from "./ProfileTripItem";

// REVIEW: I'm confused. The component is called `ProfileTripList`, but it renders the trips that are NOT the user's trips.
// REVIEW: function? Seriously?
function ProfileTripList() {
  let listOfTrips = [];

  if (authStore.user)
    listOfTrips = tripStore.trips
      .filter((item) => item.userId !== authStore.user.id)
      .map((item) => <ProfileTripItem trip={item} key={item.id} />);
  return <BoxListContainer>{listOfTrips}</BoxListContainer>;
}

export default observer(ProfileTripList);
