import React, { useState } from "react";
import { observer } from "mobx-react";
import { Text, View } from "native-base";
import commentStore from "../../stores/commentStore";
import { FlatList } from "react-native";
import { TextTitle, QuestionInput } from "./styles";

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
      <TextTitle>Q&A</TextTitle>
      <FlatList
        keyExtractor={(item) => item.id}
        data={commentStore.comments.filter((item) => item.tripId === trip.id)}
        extraData={commentStore.comments}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>Question : {item.question}</Text>
              {item.answer === "" ? (
                <QuestionInput
                  placeholder="Answer"
                  onChangeText={(answer) =>
                    setComment({
                      ...item,
                      answer,
                    })
                  }
                  onSubmitEditing={handleSubmit}
                />
              ) : (
                <Text>Answer: {item.answer}</Text>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default observer(Answer);
