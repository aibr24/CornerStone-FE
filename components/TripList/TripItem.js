import React from "react";
import { View, Text } from "react-native";
import { Left, Thumbnail, Body, ListItem, Right } from "native-base";
import DeleteButton from "../buttons/DeleteButton";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
// Styles
import { TripName } from "./styles";

const TripItem = ({ trip }) => {
  const navigation = useNavigation();
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
      {/* an onpress that would send the user to detail component, it passes {trip : trip} to detail page through route param/ ex. navigation.navigate("TripDetail",{trip:trip}) */}
      <Body>
        {/* This onPress is repeated. Maybe just move it to the <Body> component? */}
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
      <Right>
        <DeleteButton trip={trip} />
      </Right>
    </ListItem>
  );
};

export default observer(TripItem);
