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
import { View, Modal } from "react-native";

// Stores
import authStore from "../../stores/authStore";
import { TouchableOpacity } from "react-native-gesture-handler";

function Signup() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    authStore.signup(user);
    closeModal();
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <AuthContainer>
          <AuthTitle>Signup</AuthTitle>
          <AuthTextInput
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
          <AuthTextInput
            onChangeText={(firstName) => setUser({ ...user, firstName })}
            placeholder="First Name"
            placeholderTextColor="#A6AEC1"
          />
          <AuthTextInput
            onChangeText={(lastName) => setUser({ ...user, lastName })}
            placeholder="Last Name"
            placeholderTextColor="#A6AEC1"
          />
          <AuthTextInput
            onChangeText={(email) => setUser({ ...user, email })}
            placeholder="Email@example.com"
            placeholderTextColor="#A6AEC1"
          />
          <AuthButton onPress={handleSubmit}>
            <AuthButtonText>Sign up</AuthButtonText>
          </AuthButton>
        </AuthContainer>
      </Modal>
      <TouchableOpacity onPress={() => openModal()}>
        <AuthOther>Click here to register!</AuthOther>
      </TouchableOpacity>
    </View>
  );
}
export default Signup;
