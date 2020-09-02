import React from "react";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";

// Styles
import { View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";

// Stores
import authStore from "../../stores/authStore";

const SignoutButton = () => {
  const navigation = useNavigation();

  handleSignout = async () => {
    // REVIEW: This is a very weird condition. If the user is not logged in, they're not supposed to see the button نهاااااائياً. Remove this condition.
    if (authStore.user) {
      await authStore.signout();
      navigation.replace("Signin");
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
