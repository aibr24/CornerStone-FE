import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import authStore from "../../Stores/authStore";
import { Button } from "native-base";

const Singup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (authStore.signup(user)) {
      navigation.replace("Home");
    }
  };
  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Username"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <TextInput
        placeholder="First Name"
        onChangeText={(firstName) => setUser({ ...user, firstName })}
      />
      <TextInput
        placeholder="Last Name"
        onChangeText={(lastName) => setUser({ ...user, lastName })}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <Button onPress={handleSubmit}>
        <Text>Submit</Text>
      </Button>
    </View>
  );
};

export default Singup;
