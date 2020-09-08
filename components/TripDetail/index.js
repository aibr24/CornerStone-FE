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
import {
  MenuBar,
  DetailContainer,
  TripBackground,
  Back,
  DetailText,
  MainStyle,
  Divider,
  TextContainer,
  TitleText,
  ButtonStyled,
  TextBackground,
  TripContainer,
  TripContainer2,
  LowerBox,
  ProfileThum,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
//Stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";

//Components
import Question from "../Comment/Question";
import Answer from "../Comment/Answer";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;
  const profile = profileStore.getProfileById(trip.userId);

  return (
    <DetailContainer>
      <ScrollView style={{ backgroundColor: "#393e46" }}>
        <StatusBar barStyle="light-Content" />
        <TripBackground
          source={{
            uri: trip.image
              ? trip.image
              : "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
          }}
        >
          <SafeAreaView>
            <MenuBar>
              <Back>
                <TouchableOpacity onPress={navigation.goBack}>
                  <AntDesign name="arrowleft" size={24} color="#FFF" />
                </TouchableOpacity>
              </Back>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("OwnerProfile", { profile: profile })
                }
              >
                <ProfileThum
                  source={{
                    uri: profile.image
                      ? profile.image
                      : "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
                  }}
                />
              </TouchableOpacity>
            </MenuBar>
            <MainStyle>
              <TextContainer>
                <TextBackground>
                  <TitleText>Description</TitleText>
                  <DetailText>{trip.details}</DetailText>
                </TextBackground>
              </TextContainer>
            </MainStyle>
          </SafeAreaView>
        </TripBackground>
        <TripContainer>
          {authStore.user.id === trip.userId ? (
            <Answer trip={trip} />
          ) : (
            <Question trip={trip} />
          )}
        </TripContainer>
      </ScrollView>
    </DetailContainer>
  );
};

export default observer(TripDetail);
