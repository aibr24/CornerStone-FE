import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Thumbnail, Card, CardItem, Body, Left } from "native-base";
import { TripName } from "./styles";
import profileStore from "../../stores/profileStore";
import Question from "../Comment/Question";
const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;
  const profile = profileStore.getProfileById(trip.userId);

  return (
    <View>
      <Card>
        <CardItem>
          <Left>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("OwnerProfile", { profile: profile })
              }
            >
              <Thumbnail
                source={{
                  uri: profile.image
                    ? profile.image
                    : "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
                }}
              />
            </TouchableOpacity>

            <Body>
              <TripName>{trip.title}</TripName>
            </Body>
          </Left>
        </CardItem>
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
        <CardItem>
          <Body>
            <Text note>{trip.details}</Text>
          </Body>
        </CardItem>
      </Card>
      <Question trip={trip} />
    </View>
  );
};

export default TripDetail;
