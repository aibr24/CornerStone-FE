import React, { useState, useEffect } from "react";
import { View, Modal } from "react-native";

//Libraries
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

// Styles
import {
  AddButtonStyled,
  AddButtonText,
  AddModalContainer,
  AddTextInput,
  ImagePickerButton,
  ImagePickerText,
} from "./styles";

// Stores
import tripStore from "../../stores/tripStore";
import { Text } from "native-base";

const UpdateTrip = ({ trip }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const [oldTrip, setOldTrip] = useState(trip);

  const submitTrip = () => {
    tripStore.updateTrip(oldTrip);
    closeModal();
  };
  const handleUpdate = () => {
    openModal();
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
    setOldTrip({ ...oldTrip, image: imagePicked });
    console.log(oldTrip.image);
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <AddModalContainer>
          <AddTextInput
            onChangeText={(title) => setOldTrip({ ...oldTrip, title })}
            placeholder={trip.title}
            placeholderTextColor="#A6AEC1"
          ></AddTextInput>
          <AddTextInput
            onChangeText={(details) => setOldTrip({ ...oldTrip, details })}
            placeholder={trip.details}
            placeholderTextColor="#A6AEC1"
          ></AddTextInput>
          <ImagePickerButton onPress={() => _pickImage()}>
            <ImagePickerText
              placeholder="Press Here To Pick An Image"
              placeholderTextColor="#A6AEC1"
              onChangeText={(image) => setOldTrip({ ...oldTrip, image })}
            >
              Press Here to Add Image
            </ImagePickerText>
          </ImagePickerButton>
          <AddButtonStyled onPress={submitTrip}>
            <AddButtonText>Submit</AddButtonText>
          </AddButtonStyled>
          <TouchableOpacity onPress={closeModal}>
            <Text style={{ color: "#bbe1fa", marginTop: 30 }}>Cancel</Text>
          </TouchableOpacity>
        </AddModalContainer>
      </Modal>
      <TouchableOpacity onPress={handleUpdate}>
        <Icon name="edit" size={20} style={{ padding: 10 }} />
      </TouchableOpacity>
    </View>
  );
};

export default UpdateTrip;
