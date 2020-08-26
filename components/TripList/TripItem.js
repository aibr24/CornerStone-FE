import React from "react";
import { View, Text } from "react-native";
import { Left, Thumbnail, Body, ListItem } from "native-base";
import DeleteButton from "../buttons/DeleteButton";
import { observer } from "mobx-react";

const TripItem = ({ trip }) => {
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
        <Text>{trip.title}</Text>
        {/* an onpress that would send the user to detail component, it passes {trip : trip} to detail page through route param/ ex. navigation.navigate("TripDetail",{trip:trip}) */}
        <Text>{trip.details}</Text>
        <DeleteButton trip={trip} />
      </Body>
    </ListItem>
  );
};

export default observer(TripItem);
