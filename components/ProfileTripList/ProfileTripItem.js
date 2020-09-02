import React from "react";

// Styles
import { BoxItemContainer, BoxItemImage, BoxItemText } from "./styles";
import profileStore from "../../stores/profileStore";
import { Thumbnail } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
useNavigation;

const ProfileTripItem = ({ trip }) => {
  const foundProfile = profileStore.getProfileById(trip.userId);
  const navigation = useNavigation();
  return (
    <BoxItemContainer>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("OwnerProfile", { profile: foundProfile })
        }
      >
        <BoxItemText>{trip.user.username}</BoxItemText>
        <BoxItemText>{trip.title}</BoxItemText>
        <BoxItemImage
          source={{
            uri: trip.image
              ? trip.image
              : "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
          }}
        />
      </TouchableOpacity>
    </BoxItemContainer>
  );
};

export default ProfileTripItem;
