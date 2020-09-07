import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  Thumbnail,
  Card,
  CardItem,
  Body,
  Left,
  List,
  ListItem,
} from "native-base";
import { observer } from "mobx-react";

//Styles
import { TripName, Background } from "./styles";

//Stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";

//Components
import Question from "../Comment/Question";
import Answer from "../Comment/Answer";
import { ScrollView } from "react-native-gesture-handler";

const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;
  const profile = profileStore.getProfileById(trip.userId);

  return (
    <Background>
      <ScrollView>
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

        {authStore.user.id === trip.userId ? (
          <Answer trip={trip} />
        ) : (
          <Question trip={trip} />
        )}
      </ScrollView>
    </Background>
  );
};

export default observer(TripDetail);
