import styled from "styled-components/native";

export const AddButtonStyled = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #2f4751;
  margin-top: 30px;
`;

export const AddButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AddModalContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #1b262c;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AddTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #decdc3;
  border-bottom-color: #ff6900;
  border-bottom-width: 1px;
`;
