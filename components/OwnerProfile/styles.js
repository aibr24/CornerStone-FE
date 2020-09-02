import styled from "styled-components/native";
import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ProfileContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const ProfileImage = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  overflow: hidden;
`;

export const ImageStyled = styled.Image`
  flex: 1;
`;

export const DmStyled = styled.View`
  background-color: #41444b;
  position: absolute;
  top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ActiveStyled = styled.View`
  background-color: #34ffb9;
  position: absolute;
  bottom: 28px;
  left: 10px;
  padding: 4px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
`;

export const AddStyled = styled.TouchableOpacity`
  background-color: #41444b;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.View`
  align-self: center;
  align-items: center;
  margin-top: 16px;
`;
export const TextStyled = styled.Text`
  color: #52575d;

  &.subText {
    font-size: 12px;
    color: #aeb5bc;
    text-transform: uppercase;
    font-weight: 500px;
  }
`;
export const StatsContainerStyled = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 32px;
`;

export const StatsBoxStyled = styled.View`
  align-items: center;
  flex: 1;
`;

export const MediaImageContainer = styled.View`
  width: 180px;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
`;

export const MediaCount = styled.View`
  background-color: #41444b;
  position: absolute;
  top: 50%px;
  margin-top: -50px;
  margin-left: 30px;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

export const SubTextRecent = styled.Text`
  font-size: 12;
  color: #aeb5bc;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 78px;
  margin-top: 32px;
  margin-bottom: 6;
  font-size: 10;
`;

export const RecentItemStyled = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 16;
`;
export const ActivityIdicatorStyled = styled.View`
  background-color: #cabfab;
  height: 12;
  width: 12;
  border-radius: 6;
  margin-top: 3;
  margin-right: 20;
`;
