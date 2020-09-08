import React, { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";

// Styles
import { View, Modal, Platform } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {
  AddButtonStyled,
  AddButtonText,
  AddModalContainer,
  AddTextInput,
  ImagePickerButton,
  ImagePickerText,
} from "./styles";
import { TouchableOpacity } from "react-native";

// Stores
import profileStore from "../../stores/profileStore";

// Image Picker *idk what to name it*
import * as ImagePicker from "expo-image-picker";
import { Text } from "native-base";

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
    setOldProfile({ ...oldProfile, image: imagePicked });
    console.log(oldProfile.image);
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const handleImagePicker = () => {
    _pickImage();
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <AddModalContainer>
          <ImagePickerButton onPress={() => _pickImage()}>
            <ImagePickerText
              // onChangeText={(image) => setOldProfile({ ...oldProfile, image })}
              // placeholder={profile.image}
              // placeholderTextColor="#A6AEC1"
              placeholder="Press Here To Pick An Image"
              placeholderTextColor="#A6AEC1"
              onPress={handleImagePicker}
            >
              Press Here to Add Image
            </ImagePickerText>
          </ImagePickerButton>
          <AddTextInput
            onChangeText={(bio) => setOldProfile({ ...oldProfile, bio })}
            placeholder={profile.bio}
            placeholderTextColor="#A6AEC1"
          ></AddTextInput>
          <AddButtonStyled onPress={submitProfile}>
            <AddButtonText>Submit</AddButtonText>
          </AddButtonStyled>
          <TouchableOpacity onPress={closeModal}>
            <Text style={{ color: "#bbe1fa", marginTop: 30 }}>Cancel</Text>
          </TouchableOpacity>
        </AddModalContainer>
      </Modal>
      <TouchableOpacity onPress={handleUpdate}>
        <Icon name="edit" size={20} style={{ padding: 10 }} color={"#DFD8C8"} />
      </TouchableOpacity>
    </View>
  );
};

export default UpdateProfile;
