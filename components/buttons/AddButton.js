import React, { useState } from "react";
import { View, Text, Modal } from "react-native";
import {
  AddButtonStyled,
  AddButtonText,
  AddModalContainer,
  AddTextInput,
} from "./styles";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const [newTrip, setNewTrip] = useState({
    title: "",
    details: "",
    image: "",
  });

  const submitTrip = () => {
    tripStore.createTrip(newTrip);
    closeModal();
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <AddModalContainer>
          <AddTextInput
            // repeated event handler
            onChangeText={(title) => setNewTrip({ ...newTrip, title })}
            placeholder="Title"
            placeholderTextColor="#A6AEC1"
          ></AddTextInput>
          <AddTextInput
            onChangeText={(details) => setNewTrip({ ...newTrip, details })}
            placeholder="Details"
            placeholderTextColor="#A6AEC1"
          ></AddTextInput>
          <AddTextInput
            onChangeText={(image) => setNewTrip({ ...newTrip, image })}
            placeholder="Image"
            placeholderTextColor="#A6AEC1"
          ></AddTextInput>
          <AddButtonStyled onPress={submitTrip}>
            <AddButtonText>Submit</AddButtonText>
          </AddButtonStyled>
        </AddModalContainer>
      </Modal>

      <AddButtonStyled onPress={openModal}>
        <AddButtonText>Add Trip</AddButtonText>
      </AddButtonStyled>
    </View>
  );
};

export default AddButton;
