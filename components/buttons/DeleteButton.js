import React from "react";

// Styles
import { View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TrashIcon } from "./styles";

// Stores
import tripStore from "../../stores/tripStore";

const DeleteButton = ({ trip }) => {
  handleDelete = () => {
    tripStore.deleteTrip(trip.id);
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
