import React from "react";
import { View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const DeleteButton = ({ trip }) => {
  handleDelete = () => {
    if (authStore.user.id === trip.userId) {
      tripStore.deleteTrip(trip.id);
    } else {
      // good functionality, not as good UI/UX design. This isn't very user-friendly.
      // make it better and nicer for non-tech people (normal human beings with feelings)
      alert("un-Authorized!");
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleDelete}>
        <Icon name="delete" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default DeleteButton;
