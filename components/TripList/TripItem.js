import React from "react";
import { observer } from "mobx-react";

// Styles
import { Text } from "react-native";
import { Left, Thumbnail, Body, ListItem } from "native-base";
import { TripName } from "./styles";

// Components
import UpdateTrip from "../buttons/UpdateTrip";
import DeleteButton from "../buttons/DeleteButton";
import FavoriteButton from "../buttons/FavoriteButton";

const TripItem = ({ trip, navigation }) => {
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail
          small
          source={{
            uri: trip.image
              ? trip.image
              : "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
          }}
        />
      </Left>

      <Body>
        <TripName
          onPress={() => navigation.navigate("Trip Detail", { trip: trip })}
        >
          {trip.title}
        </TripName>
        <Text
          onPress={() => navigation.navigate("Trip Detail", { trip: trip })}
        >
          {trip.details}
        </Text>
      </Body>
      <FavoriteButton trip={trip} />
      <UpdateTrip trip={trip} />
      <DeleteButton trip={trip} style={{ color: "red" }} />
    </ListItem>
  );
};

export default observer(TripItem);
