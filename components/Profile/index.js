import React from "react";

import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  ProfileContainer,
  ProfileImage,
  ImageStyled,
  DmStyled,
  ActiveStyled,
  AddStyled,
  InfoContainer,
  TextStyled,
  StatsContainerStyled,
  StatsBoxStyled,
  MediaImageContainer,
  MediaCount,
  SubTextRecent,
  RecentItemStyled,
  ActivityIdicatorStyled,
} from "./styles";

const Profile = () => {
  return (
    <ProfileContainer>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Text>Hello there!</Text>
        <View style={{ alignSelf: "center" }}>
          <ProfileImage>
            <ImageStyled
              source={{
                uri:
                  "https://rakshasa.me/wp-content/uploads/avatars/6473/5bbea254b5f46-bpfull.png",
              }}
              // resizeMode="center" -> this was used in the original code but when I use it, it gives me a square image
            ></ImageStyled>
          </ProfileImage>
          <DmStyled>
            <MaterialIcons
              name="chat"
              size={18}
              color="#DFD8C8"
            ></MaterialIcons>
          </DmStyled>
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
            Madara
          </TextStyled>
          <TextStyled style={{ color: "#AEB5BC", fontSize: 14 }}>
            Photograph
          </TextStyled>
        </InfoContainer>

        <StatsContainerStyled>
          <StatsBoxStyled>
            <TextStyled style={{ fontSize: 24 }}>434</TextStyled>
            <TextStyled className="subText">Posts</TextStyled>
          </StatsBoxStyled>
          <StatsBoxStyled>
            <TextStyled style={{ fontSize: 24 }}>1,000,000</TextStyled>
            <TextStyled className="subText">Followers</TextStyled>
          </StatsBoxStyled>
          <StatsBoxStyled>
            <TextStyled style={{ fontSize: 24 }}>144</TextStyled>
            <TextStyled className="subText">Following</TextStyled>
          </StatsBoxStyled>
        </StatsContainerStyled>

        <View style={{ marginTop: 32 }}>
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
        </View>
        <SubTextRecent>Recent Activity</SubTextRecent>
        <View style={{ alignItems: "center" }}>
          <RecentItemStyled>
            <ActivityIdicatorStyled></ActivityIdicatorStyled>
            <View style={{ width: 250 }}>
              <TextStyled style={{ color: "#41444B", fontWeight: "300" }}>
                Started following{" "}
                <Text style={{ fontWeight: "400" }}>Jake Challeahe</Text> and{" "}
                <Text style={{ fontWeight: "400" }}>Luis Poteer</Text>
              </TextStyled>
            </View>
          </RecentItemStyled>
          <RecentItemStyled>
            <ActivityIdicatorStyled></ActivityIdicatorStyled>
            <View style={{ width: 250 }}>
              <TextStyled style={{ color: "#41444B", fontWeight: "300" }}>
                Started following{" "}
                <Text style={{ fontWeight: "400" }}>Luke Harper</Text>
              </TextStyled>
            </View>
          </RecentItemStyled>
        </View>
      </ScrollView>
    </ProfileContainer>
  );
};

export default Profile;
