import styled from "styled-components/native";
import { CardItem, Card, View } from "native-base";
import { Button } from "react-native-paper";

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
`;

export const AnswerContainer = styled.View`
  flex-direction: row;
`;

export const QuestionStyled = styled(CardItem)`
  background-color: #f2f2f2;
`;

export const AnswerStyled = styled(CardItem)`
  background-color: #888;
`;

export const QuestionTextStyled = styled.Text`
  font-weight: bold;
  color: #000;
`;

export const AnswerTextStyled = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const SubmitButtonStyled = styled(Button)`
  width: 200;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #ff8d68;
`;

export const QuestionView = styled(View)`
  width: 100%;
`;

export const CardBackground = styled(Card)`
  background-color: #ccc;
`;
