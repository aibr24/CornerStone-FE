import React from "react";
import { View, Text, Image } from "react-native";
import { Thumbnail, Card, CardItem, Body, Left } from "native-base";
import { TripName } from "./styles";

const TripDetail = ({ route }) => {
  const { trip } = route.params;
  return (
    <View>
      {/* we can ditch the Card thing i was just testing it stylewise, we can make it a modal popup that is the detail page if you guys like that better, or whatever yall see fit */}
      <Card>
        <CardItem>
          <Left>
            {/* can add a thumbnail that displays user(profile pic) that made trip */}
            <Thumbnail
              source={{
                uri: trip.image
                  ? trip.image
                  : "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
              }}
            />
            {/* temp thumbnail to see how it would look */}
            <Body>
              <TripName>{trip.title}</TripName>
              {/* we can add a <Text note> trip location like how instagram adds geotags to pictures, in case the title doesnt include the country*/}
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
    </View>
  );
};

export default TripDetail;
