import React, { useState } from "react";
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";

const FavoriteButton = ({ trip }) => {
  const [fav, setFav] = useState(false);

  const [oldTrip, setOldTrip] = useState(trip);

  // const handleStateUpdate = () => {
  //   setOldTrip({ ...oldTrip, fav: !fav });
  // };

  const handleToggle = () => {
    // handleStateUpdate();
    setFav(!fav);
    setOldTrip({ ...oldTrip, fav: fav });
    tripStore.updateTrip(oldTrip);
    // setFav(!fav);
  };
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
