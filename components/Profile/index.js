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

// Stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  let profile = null;
  if (authStore.user) profile = profileStore.getProfileById(authStore.user.id);

  const listOfTrips = tripStore.trips.filter(
    (item) => item.userId === authStore.user.id
  );

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
          <TouchableOpacity onPress={() => navigation.navigate("MyTrips")}>
            <TextStyled style={{ fontSize: 24 }}>
              {listOfTrips.length}
            </TextStyled>
            <TextStyled className="subText">My Trips</TextStyled>
          </TouchableOpacity>
        </StatsBoxStyled>
      </StatsContainerStyled>
    </ProfileContainer>
  );
};
export default observer(Profile);
