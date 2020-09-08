import React from "react";
import { observer } from "mobx-react";

//Styles
import AddTrip from "./AddTrip";
import { Content, List, View } from "native-base";

import { ListContainer } from "./styles";
//Components
import TripItem from "./TripItem";

// Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const TripList = ({ navigation }) => {
  const listOfTrips = authStore.user
    ? tripStore.trips
        .filter((item) => item.userId === authStore.user.id)
        .map((item) => (
          <TripItem trip={item} key={item.id} navigation={navigation} />
        ))
    : [];

  return (
    <View>
      <ListContainer>
        {listOfTrips}
        <AddTrip />
      </ListContainer>
    </View>
  );
};

export default observer(TripList);
