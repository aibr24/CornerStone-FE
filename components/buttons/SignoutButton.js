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
    await authStore.signout();
    navigation.replace("Signin");
  };

  return (
    <View>
      <TouchableOpacity onPress={handleSignout}>
        <Icon
          name="log-out"
          size={20}
          color="#fff"
          style={{ paddingRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default observer(SignoutButton);
