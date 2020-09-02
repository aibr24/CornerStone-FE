import styled from "styled-components";
import { View } from "native-base";

export const BoxListContainer = styled.View`
  width: 100%;
  height: 85%;
  padding: 5px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BoxItemContainer = styled.View`
  width: 50%;
  height: 50%;
  padding: 5px;
`;

export const BoxItemImage = styled.Image`
  width: 100%;
  height: 60%;
  justify-content: center;
`;

export const BoxItemText = styled.Text`
  color: black;
  font-weight: bold;
`;