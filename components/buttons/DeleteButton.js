import React from "react";
import { View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import { TrashIcon } from "./styles";

const DeleteButton = ({ trip }) => {
  handleDelete = () => {
    if (authStore.user.id === trip.userId) {
      tripStore.deleteTrip(trip.id);
    } else {
      alert("un-Authorized!");
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={handleDelete}>
        <TrashIcon name="trash-alt" type="FontAwesome5" />
      </TouchableOpacity>
    </View>
  );
};
export default DeleteButton;
