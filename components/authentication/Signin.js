import React, { useState } from "react";

// Styles
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "./styles";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

function Signin({ navigation }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace("Trips");
  };

  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
      <AuthTextInput
        // repeated event handler function
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Click here to register!
      </AuthOther>
    </AuthContainer>
  );
}

export default observer(Signin);
