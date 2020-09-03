import React from "react";

// Styles
import { BoxItemContainer, BoxItemImage, BoxItemText } from "./styles";
import profileStore from "../../stores/profileStore";
import { Thumbnail, ListItem, Card, CardItem, Body, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
useNavigation;

const ProfileTripItem = ({ trip }) => {
  const foundProfile = profileStore.getProfileById(trip.userId);
  const navigation = useNavigation();
  return (
    <Card>
      <CardItem>
        <Body>
          <Text>{trip.user.username}</Text>
          <Text>{trip.title}</Text>
        </Body>
      </CardItem>
      <TouchableOpacity
        onPress={() => navigation.navigate("Trip Detail", { trip: trip })}
      >
        <CardItem cardBody>
          <Image
            source={{
              uri: trip.image
                ? trip.image
                : "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </TouchableOpacity>
    </Card>
  );
};

export default ProfileTripItem;
