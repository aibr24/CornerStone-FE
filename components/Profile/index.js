import React, { useState } from "react";
import { observer } from "mobx-react";

// Components
import UpdateProfile from "../buttons/UpdateProfile";

// Styles
import { View } from "react-native";
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
import Markdown from "react-native-easy-markdown";
import TripList from "../TripList/index";

// Stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Spinner } from "native-base";

const Profile = ({ navigation }) => {
  if (!authStore.user) return <Spinner />;
  // let profile = null;

  const profile = profileStore.getProfileById(authStore.user.id);
  if (!profile) return <Spinner />;
  const listOfTrips = authStore.user
    ? tripStore.trips.filter((item) => item.userId === authStore.user.id)
    : [];

  return (
    <ProfileContainer>
      <ScrollView>
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
          <AddStyled>
            <UpdateProfile profile={profile} />
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
            <TextStyled className="subText">My Trips</TextStyled>
            <TextStyled style={{ fontSize: 24 }}>
              {listOfTrips.length}
            </TextStyled>
          </StatsBoxStyled>
        </StatsContainerStyled>

        <TripList navigation={navigation} />
      </ScrollView>
    </ProfileContainer>
  );
};
export default observer(Profile);
