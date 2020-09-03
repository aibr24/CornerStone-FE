import React, { useState } from "react";
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

const FavoriteButton = () => {
  const [fav, setFav] = useState(true);

  const handleToggle = () => {
    setFav(!fav);
  };
  const handleFav = fav ? (
    <Icon name="favorite-border" size={30} />
  ) : (
    <Icon name="favorite" size={30} />
  );

  return (
    <View>
      <TouchableOpacity onPress={handleToggle}>{handleFav}</TouchableOpacity>
    </View>
  );
};
export default FavoriteButton;
