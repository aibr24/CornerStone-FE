import React, { useState } from "react";
import { observer } from "mobx-react";
import { Text, View } from "native-base";
import commentStore from "../../stores/commentStore";
import { FlatList } from "react-native";
import { TextTitle, QuestionInput } from "./styles";
import { Button } from "react-native-paper";
const Question = ({ trip }) => {
  const [comment, setComment] = useState({
    question: "something",
    answer: "",
    tripId: trip.id,
  });

  const handleSubmit = () => {
    console.log(comment);
    commentStore.createComment(comment);
  };

  return (
    <View>
      <TextTitle>Q&A</TextTitle>
      <QuestionInput
        placeholder="Ask a Question"
        onChangeText={(question) => setComment({ ...comment, question })}
      />
      <Button mode="contained" style={{ width: 200 }} onPress={handleSubmit}>
        Submit Question
      </Button>
      <FlatList
        keyExtractor={(item) => item.id}
        data={commentStore.comments.filter((item) => item.tripId === trip.id)}
        renderItem={({ item }) => (
          <View>
            <Text>Question : {item.question}</Text>
            <Text>Answer : {item.answer}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default observer(Question);
