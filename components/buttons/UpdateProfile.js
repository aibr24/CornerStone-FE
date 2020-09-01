import React, { useState } from "react";

// Styles
import { View, Modal } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {
  AddButtonStyled,
  AddButtonText,
  AddModalContainer,
  AddTextInput,
} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

// Stores

import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

const UpdateProfile = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const [oldProfile, setOldProfile] = useState(profile);

  const submitProfile = () => {
    profileStore.updateProfile(oldProfile);
    closeModal();
  };
  const handleUpdate = () => {
    if (authStore.user.id === profille.userId) {
      openModal();
    } else {
      alert("Un-Authorized!");
    }
  };
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <AddModalContainer>
          <AddTextInput
            onChangeText={(image) => setOldProfile({ ...oldProfile, image })}
            placeholder={profile.image}
            placeholderTextColor="#A6AEC1"
          ></AddTextInput>
          <AddTextInput
            onChangeText={(bio) => setOldProfile({ ...oldProfile, bio })}
            placeholder={profile.bio}
            placeholderTextColor="#A6AEC1"
          ></AddTextInput>
          <AddButtonStyled onPress={submitProfile}>
            <AddButtonText>Submit</AddButtonText>
          </AddButtonStyled>
        </AddModalContainer>
      </Modal>
      <TouchableOpacity onPress={handleUpdate}>
        <Icon name="edit" size={20} style={{ padding: 10 }} />
      </TouchableOpacity>
    </View>
  );
};

export default UpdateProfile;
