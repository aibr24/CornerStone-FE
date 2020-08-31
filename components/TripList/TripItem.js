import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

// Styles
import { Text } from "react-native";
import { Left, Thumbnail, Body, ListItem } from "native-base";
import { TripName } from "./styles";

// Components
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";

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
      <DeleteButton trip={trip} />
      <UpdateButton trip={trip} />
    </ListItem>
  );
};

export default observer(TripItem);
