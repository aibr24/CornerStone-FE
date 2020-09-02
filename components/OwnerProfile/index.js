import React, { useState } from "react";
import { observer } from "mobx-react";

// Components

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
import ProfileTripItem from "../ProfileTripList/ProfileTripItem";
import { BoxListContainer } from "../ProfileTripList/styles";

const OwnerProfile = ({ route }) => {
  const { profile } = route.params;

  const listOfTrips = tripStore.trips
    .filter((item) => item.userId === profile.userId)
    .map((item) => <ProfileTripItem trip={item} key={item.id} />);

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
          <TextStyled style={{ fontSize: 24 }}>{listOfTrips.length}</TextStyled>
          <TextStyled className="subText">My Trips</TextStyled>
        </StatsBoxStyled>
      </StatsContainerStyled>
      <BoxListContainer>{listOfTrips}</BoxListContainer>

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

export default observer(OwnerProfile);
