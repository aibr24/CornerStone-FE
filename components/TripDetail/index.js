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
  LowerBox,
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
      <ScrollView>
        <StatusBar barStyle="light-Content" />
        <TripBackground
          source={{
            uri:
              "https://d1bvpoagx8hqbg.cloudfront.net/originals/new-york-night-ca4bea1ac36526dcd0ea097c9424c763.jpg",
          }}
        >
          <SafeAreaView>
            <MenuBar>
              <Back>
                <AntDesign name="arrowleft" size={24} color="#FFF" />
                <DetailText>Back</DetailText>
              </Back>
              <AntDesign name="heart" size={24} color="#FFF" />
            </MenuBar>
            <MainStyle>
              <TextContainer>
                <TextBackground>
                  <TitleText>Description</TitleText>

                  <DetailText>
                    The city is dangerous .. stay away from it .. everything is
                    expensive .. and cops use people for shooting practice ..
                    stay home and watch Netflix!
                  </DetailText>
                </TextBackground>
              </TextContainer>
            </MainStyle>
          </SafeAreaView>
        </TripBackground>
        <TripContainer>
          <LowerBox>
            {authStore.user.id === trip.userId ? (
              <Answer trip={trip} />
            ) : (
              <Question trip={trip} />
            )}
          </LowerBox>
        </TripContainer>
      </ScrollView>
    </DetailContainer>
  );
};

export default observer(TripDetail);
