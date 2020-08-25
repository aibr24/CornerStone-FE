import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import authStore from "../../Stores/authStore";
import { Button } from "native-base";
import { observer } from "mobx-react";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // const handleSubmit = () => {
  //   authStore.signin(user);
  //   if (authStore.user) {
  //     navigation.goBack();
  //   }
  // };
  return (
    <View>
      <Text>Sign In</Text>
      <TextInput
        placeholder="Username"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <Button >
        <Text>Submit</Text>
      </Button>
    </View>
  );
};

export default observer(Signin);
