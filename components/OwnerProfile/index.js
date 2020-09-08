import React from "react";
import { observer } from "mobx-react";

// Components

// Styles
import { View, ScrollView } from "react-native";
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
import tripStore from "../../stores/tripStore";
import ProfileTripItem from "../ProfileTripList/ProfileTripItem";

const OwnerProfile = ({ route }) => {
  const { profile } = route.params;

  const listOfTrips = tripStore.trips
    .filter((item) => item.userId === profile.userId)
    .map((item) => <ProfileTripItem trip={item} key={item.id} />);

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
        </View>

        <InfoContainer>
          <TextStyled style={{ fontWeight: "200", fontSize: 36 }}>
            {profile.user.username}
          </TextStyled>
          <TextStyled style={{ color: "#AEB5BC", fontSize: 14 }}>
            {profile.bio ? profile.bio : "no bio available"}
          </TextStyled>
        </InfoContainer>

        <StatsContainerStyled>
          <StatsBoxStyled>
            <TextStyled style={{ fontSize: 24 }}>
              {listOfTrips.length}
            </TextStyled>
            <TextStyled className="subText">My Trips</TextStyled>
          </StatsBoxStyled>
        </StatsContainerStyled>
        {listOfTrips}
      </ScrollView>
    </ProfileContainer>
  );
};

export default observer(OwnerProfile);
