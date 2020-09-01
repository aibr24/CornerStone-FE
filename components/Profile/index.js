import React, { useState } from "react";
import { observer } from "mobx-react";
// Components
import TripItem from "../TripList/TripItem";

// Styles
import { View } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import {
  ProfileContainer,
  ProfileImage,
  ImageStyled,
  ActiveStyled,
  AddStyled,
  InfoContainer,
  TextStyled,
  StatsContainerStyled,
  StatsBoxStyled,
} from "./styles";

// Stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

const Profile = () => {
  let profile = null;
  if (authStore.user)
    profile = profileStore.profiles.find(
      (item) => item.userId === authStore.user.id
    );
  const listOfTrips = tripStore.trips.filter(
    (item) => item.userId == authStore.user.id
  );

  const tripSum = () => listOfTrips.length;

  return (
    <ProfileContainer>
      <View style={{ alignSelf: "center" }}>
        <ProfileImage>
          <ImageStyled
            source={{
              uri: profile.image
                ? profile.image
                : "https://pwcenter.org/sites/default/files/default_images/default_profile.png",
            }}
          ></ImageStyled>
        </ProfileImage>
        <ActiveStyled></ActiveStyled>
        <AddStyled>
          <Ionicons
            name="ios-add"
            size={48}
            color="#DFD8C8"
            style={{ marginTop: 6, marginLeft: 2 }}
          ></Ionicons>
        </AddStyled>
      </View>

      <InfoContainer>
        <TextStyled style={{ fontWeight: "200", fontSize: 36 }}>
          {authStore.user.username}
        </TextStyled>
        <TextStyled style={{ color: "#AEB5BC", fontSize: 14 }}>
          {profile.bio ? profile.bio : "no bio available"}
        </TextStyled>
      </InfoContainer>

      <StatsContainerStyled>
        <StatsBoxStyled>
          <TextStyled style={{ fontSize: 24 }}>{() => tripSum}</TextStyled>
          <TextStyled className="subText">My Trips</TextStyled>
        </StatsBoxStyled>
      </StatsContainerStyled>

      {/* <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <MediaImageContainer>
              <ImageStyled
                source={{
                  uri:
                    "https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/10/Featured-Image-9.jpg",
                }}
                resizeMode="cover"
              ></ImageStyled>
            </MediaImageContainer>
            <MediaImageContainer>
              <ImageStyled
                source={{
                  uri:
                    "https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/10/Featured-Image-9.jpg",
                }}
                resizeMode="cover"
              ></ImageStyled>
            </MediaImageContainer>
            <MediaImageContainer>
              <ImageStyled
                source={{
                  uri:
                    "https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/10/Featured-Image-9.jpg",
                }}
                resizeMode="cover"
              ></ImageStyled>
            </MediaImageContainer>
          </ScrollView>
          <MediaCount>
            <TextStyled
              style={{ fontSize: 24, color: "#DFD8C8", fontWeight: "300" }}
            >
              77
            </TextStyled>
            <TextStyled
              style={{
                fontSize: 12,
                color: "#DFD8C8",
                textTransform: "uppercase",
              }}
            >
              Media
            </TextStyled>
          </MediaCount>
        </View> */}
    </ProfileContainer>
  );
};

export default observer(Profile);
