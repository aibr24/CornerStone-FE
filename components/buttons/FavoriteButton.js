import React, { useState } from "react";
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";

const FavoriteButton = ({ trip }) => {
  const handleToggle = () => {
    tripStore.updateTrip({ ...trip, fav: !trip.fav });
  };
  //ui should update seperate form backend.
  const handleFav = trip.fav ? (
    <Icon name="favorite" size={30} />
  ) : (
    <Icon name="favorite-border" size={30} />
  );

  return (
    <View>
      <TouchableOpacity onPress={handleToggle}>{handleFav}</TouchableOpacity>
    </View>
  );
};
export default observer(FavoriteButton);
