import styled from "styled-components/native";
import { CardItem, Card, View } from "native-base";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export const TextTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  justify-content: center;
`;
export const QuestionInput = styled.TextInput`
  height: 35px;
  width: 90%;
  border-color: gray;
  border-width: 2px;
  text-align: center;
  justify-content: center;
  margin-left: 20px;
  background-color: #fff;
`;

export const AnswerContainer = styled.View`
  flex-direction: row;
`;

export const QuestionStyled = styled(CardItem)`
  background-color: #393e46;
`;

export const AnswerStyled = styled(CardItem)`
  height: 75px;
  background-color: #ebebeb;
`;

export const QuestionTextStyled = styled.Text`
  font-weight: bold;
  color: #bbe1fa;
`;

export const AnswerTextStyled = styled.Text`
  color: #000;
`;

export const SubmitButtonStyled = styled(Button)`
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-color: #ddd;
  color: white;
`;

export const malikButtonStyled = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

  background-color: rgba(255, 255, 255, 0.1);
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 100px;
`;

export const QuestionView = styled(View)`
  background-color: transparent;

  width: 100%;
`;

export const CardBackground = styled(Card)`
  background-color: transparent;
`;

export const CardItemStyled = styled(CardItem)`
  background-color: transparent;
`;
