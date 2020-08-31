import React from "react";
import { Text, View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function Profile() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={() => navigation.navigate("MyTrips")}>
        <Text>Go To MyTrips</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
