import React, { useState } from "react";
import { observer } from "mobx-react";
import { Text, View, Card } from "native-base";
import commentStore from "../../stores/commentStore";
import { FlatList } from "react-native";
import {
  TextTitle,
  QuestionInput,
  CardItemStyled,
  QuestionView,
  QuestionStyled,
  AnswerStyled,
  QuestionTextStyled,
  AnswerInput,
  AnswerTextStyled,
} from "./styles";

const Answer = ({ trip }) => {
  const [comment, setComment] = useState({
    question: "",
    answer: "",
    id: null,
  });

  const handleSubmit = () => {
    commentStore.updateComment(comment);
  };

  return (
    <View>
      <TextTitle>Questions:</TextTitle>
      <FlatList
        keyExtractor={(item) => item.id}
        data={commentStore.comments.filter((item) => item.tripId === trip.id)}
        extraData={commentStore.comments}
        renderItem={({ item }) => {
          return (
            <View>
              <Card>
                <QuestionStyled>
                  <QuestionTextStyled>
                    {item.question + " ?"}
                  </QuestionTextStyled>
                </QuestionStyled>
                {item.answer === "" ? (
                  <AnswerInput
                    placeholder="Answer Here..."
                    onChangeText={(answer) =>
                      setComment({
                        ...item,
                        answer,
                      })
                    }
                    onSubmitEditing={handleSubmit}
                  />
                ) : (
                  <AnswerStyled>
                    <AnswerTextStyled>{item.answer}</AnswerTextStyled>
                  </AnswerStyled>
                )}
              </Card>
            </View>
          );
        }}
      />
    </View>
  );
};

export default observer(Answer);
