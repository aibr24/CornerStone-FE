import styled from "styled-components/native";
import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ProfileContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #393e46;
`;

export const ProfileImage = styled.View`
  margin-top: 50px;
  width: 200;
  height: 200;
  border-radius: 100;
  overflow: hidden;
`;

export const ImageStyled = styled.Image`
  flex: 1;
`;

export const DmStyled = styled.View`
  background-color: #41444b;
  position: absolute;
  top: 20;
  width: 40;
  height: 40;
  border-radius: 20;
  align-items: center;
  justify-content: center;
`;

export const ActiveStyled = styled.View`
  background-color: #34ffb9;
  position: absolute;
  bottom: 28;
  left: 10;
  padding: 4px;
  height: 20;
  width: 20;
  border-radius: 10;
`;

export const AddStyled = styled.TouchableOpacity`
  background-color: #41444b;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60;
  height: 60;
  border-radius: 30;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.View`
  align-self: center;
  align-items: center;
  margin-top: 16;
`;
export const TextStyled = styled.Text`
  color: #eee;

  &.subText {
    font-size: 12;
    color: #aeb5bc;
    text-transform: uppercase;
    font-weight: 500;
  }
`;
export const StatsContainerStyled = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 32;
`;

export const StatsBoxStyled = styled.View`
  align-items: center;
  flex: 1;
`;

export const MediaImageContainer = styled.View`
  width: 180;
  height: 200;
  border-radius: 12;
  overflow: hidden;
`;

export const MediaCount = styled.View`
  background-color: #41444b;
  position: absolute;
  top: 50%;
  margin-top: -50;
  margin-left: 30;
  width: 100;
  height: 100;
  align-items: center;
  justify-content: center;
  border-radius: 12;
`;

export const SubTextRecent = styled.Text`
  font-size: 12;
  color: #aeb5bc;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 78;
  margin-top: 32;
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
