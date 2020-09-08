import styled from "styled-components/native";
import { Icon } from "native-base";

export const AddButtonStyled = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #2f4751;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const AddButtonText = styled.Text`
  color: #bbe1fa;
  font-weight: bold;
  font-size: 18px;
`;

export const AddModalContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #393e46;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AddTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #decdc3;
  border-bottom-color: #bbe1fa;
  border-bottom-width: 1px;
`;

export const TrashIcon = styled(Icon)`
  color: black;
  font-size: 25px;
  padding: 10px;
`;

export const ImagePickerButton = styled.TouchableOpacity`
  background-color: #253941;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 260px;
  height: 40px;
  border: solid;
  border-color: #a6aec1;
  border-bottom-color: #bbe1fa;
  border-right-color: #bbe1fa;
  border-left-color: #bbe1fa;
  border-top-color: #bbe1fa;
  border-radius: 8;
  elevation: 8;
`;

export const ImagePickerText = styled.Text`
  align-self: stretch;
  text-align: center;
  height: 40px;
  margin-top: 10px;

  color: #a6aec1;
`;
