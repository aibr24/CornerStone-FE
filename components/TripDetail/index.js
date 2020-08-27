import React from "react";
import { View, Text } from "react-native";
import { Image, Thumbnail } from "native-base";

const TripDetail = ({ route }) => {
  const { trip } = route.params;
  return (
    <View>
      <Thumbnail
        small
        source={{
          uri: trip.image
            ? trip.image
            : "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
        }}
      />
      <Text>{trip.title}</Text>
      <Text>{trip.details}</Text>
    </View>
  );
};

export default TripDetail;
