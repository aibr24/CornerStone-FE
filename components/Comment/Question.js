import React, { useState } from "react";
import { observer } from "mobx-react";
import { FlatList } from "react-native";
import { Button } from "react-native-paper";
import { Text, View, List, ListItem, Card, CardItem, Left } from "native-base";

//Stores
import commentStore from "../../stores/commentStore";

//Styles
import {
  TextTitle,
  QuestionInput,
  QuestionStyled,
  QuestionTextStyled,
  AnswerStyled,
  AnswerTextStyled,
  SubmitButtonStyled,
  QuestionView,
  CardBackground,
} from "./styles";

const Question = ({ trip }) => {
  const [comment, setComment] = useState({
    question: "something",
    answer: "",
    tripId: trip.id,
  });

  const handleSubmit = () => {
    commentStore.createComment(comment);
  };

  return (
    <View>
      <CardBackground>
        <CardItem>
          <QuestionView>
            <QuestionInput
              placeholder="Ask a Question"
              onChangeText={(question) => setComment({ ...comment, question })}
            />
            <SubmitButtonStyled mode="contained" onPress={handleSubmit}>
              Submit Question
            </SubmitButtonStyled>
          </QuestionView>
        </CardItem>
        <FlatList
          keyExtractor={(item) => item.id}
          data={commentStore.comments.filter((item) => item.tripId === trip.id)}
          renderItem={({ item }) => (
            <View>
              <Card>
                <QuestionStyled>
                  <QuestionTextStyled>
                    Q : {"   " + item.question}
                  </QuestionTextStyled>
                </QuestionStyled>
                <AnswerStyled>
                  <AnswerTextStyled>A : {"   " + item.answer}</AnswerTextStyled>
                </AnswerStyled>
              </Card>
            </View>
          )}
        />
      </CardBackground>
    </View>
  );
};

export default observer(Question);
