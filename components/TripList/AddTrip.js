import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { View, Modal, Button } from "react-native";

// Styles
import {
  AddButtonStyled,
  AddButtonText,
  AddModalContainer,
  AddTextInput,
  ImagePickerButton,
  ImagePickerText,
} from "../buttons/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

// Stores
import tripStore from "../../stores/tripStore";

const AddTrip = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const [newTrip, setNewTrip] = useState({
    title: "",
    details: "",
    image: "",
  });

  const submitTrip = async () => {
    await tripStore.createTrip(newTrip);
    closeModal();
  };

  const getPermissionAsync = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    let imagePicked = result.uri;
    setNewTrip({ ...newTrip, image: imagePicked });
    console.log(newTrip.image);
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <AddModalContainer>
          <AddTextInput
            onChangeText={(title) => setNewTrip({ ...newTrip, title })}
            placeholder="Title"
            placeholderTextColor="#A6AEC1"
          ></AddTextInput>
          <AddTextInput
            onChangeText={(details) => setNewTrip({ ...newTrip, details })}
            placeholder="Details"
            placeholderTextColor="#A6AEC1"
          ></AddTextInput>
          <ImagePickerButton onPress={() => _pickImage()}>
            <ImagePickerText>Press Here to Add Image</ImagePickerText>
          </ImagePickerButton>
          <View>
            <AddButtonStyled onPress={submitTrip}>
              <AddButtonText>Submit</AddButtonText>
            </AddButtonStyled>
            <Button title="Cancel" onPress={closeModal} color="red"></Button>
          </View>
        </AddModalContainer>
      </Modal>
      <AddButtonStyled onPress={openModal}>
        <AddButtonText>Add Trip</AddButtonText>
      </AddButtonStyled>
    </View>
  );
};

export default AddTrip;
