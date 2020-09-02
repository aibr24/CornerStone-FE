import React from "react";

// Styles
import { View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TrashIcon } from "./styles";

// Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const DeleteButton = ({ trip }) => {
  handleDelete = () => {
    // REVIEW: if the user is not the trip owner are not supposed to see the button نهائياً. So this condition is not necessary. Remove it.
    if (authStore.user.id === trip.userId) {
      tripStore.deleteTrip(trip.id);
    } else {
      alert("un-Authorized!");
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={handleDelete}>
        <TrashIcon
          // REVIEW: What did we say about inline styling?
          name="trash-alt"
          type="FontAwesome5"
          style={{ padding: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default DeleteButton;
