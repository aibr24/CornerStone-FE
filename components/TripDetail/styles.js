import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Thumbnail } from "native-base";

export const TripName = styled.Text`
  font-weight: bold;
`;

export const Background = styled.View`
  background: #4c525c;
`;

// New Style below
// 4c525c dark grey ish

export const DetailContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const TripBackground = styled.ImageBackground`
  width: 100%;
`;

export const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

export const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TitleText = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: 600;
`;
// font-family: "AvenirNext-Regular";
export const DetailText = styled.Text`
  color: #fff;
`;
// font-family: "AvenirNext-Regular";

export const MainStyle = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;

export const Divider = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 6px;
  width: 150px;
  margin: 8px 0;
`;

export const TextContainer = styled.View`
  background: rgba(0, 0, 0, 0);
`;

export const ButtonStyled = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255, 255, 255, 0.3);
`;
export const TextBackground = styled.View`
  margin: 1px;
  background-color: rgba(0, 0, 0, 0.75);
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 5px 10px 10px 10px;
`;

export const TripContainer = styled.View`
  margin-top: -24px;
  padding: 10px;
  background-color: #393e46;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const LowerBox = styled.View`
  margin-top: 16px;
`;

export const ProfileThum = styled(Thumbnail)`
  border: solid;
  border-width: 2;
  border-color: #fff;
`;
