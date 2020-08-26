import React from "react";
import authStore from "../../stores/authStore";
import { View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

const SignoutButton = () => {
  const navigation = useNavigation();
  handleSignout = () => {
    if (authStore.user) {
      authStore.signout; // this doesn't work
      navigation.navigate("Signin");
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleSignout}>
        <Icon name="log-out" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default observer(SignoutButton);
