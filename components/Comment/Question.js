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
  CardItemStyled,
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
    <>
      <CardItemStyled>
        <QuestionView>
          <QuestionInput
            placeholder="Ask a Question..."
            onChangeText={(question) => setComment({ ...comment, question })}
          />
          <SubmitButtonStyled
            mode="outlined"
            placeholder="Submit Question"
            onPress={handleSubmit}
          >
            <Text style={{ color: "#fff" }}>submit</Text>
          </SubmitButtonStyled>
        </QuestionView>
      </CardItemStyled>
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
    </>
  );
};

export default observer(Question);
