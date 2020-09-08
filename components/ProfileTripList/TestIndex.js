import React from "react";
import { observer } from "mobx-react";
//Components
import ProfileTripItem from "./ProfileTripItem";

// Styles
import {
  BoxListContainer,
  Container,
  DarkOVerlay,
  ImageOverlay,
} from "./styles";

// Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import {
  ScrollView,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { List, Content, Text } from "native-base";
import Icon from "react-native-vector-icons/Foundation";
import { useNavigation } from "@react-navigation/native";

const ProfileTripList = () => {
  let listOfTrips = [];
  const navigation = useNavigation();
  if (authStore.user)
    listOfTrips = tripStore.trips
      .filter((item) => item.userId !== authStore.user.id)
      .map((item) => <ProfileTripItem trip={item} key={item.id} />);

  const image = {
    uri:
      "https://www.newroads.ca/wp-content/uploads/2017/10/Best-Fall-Road-Trip-Destinations-in-Ontario.jpg",
  };
  return (
    <View style={{ backgroundColor: "#1b262c" }}>
      <Container style={{ paddingVertical: 20 }}>
        <DarkOVerlay></DarkOVerlay>
        <ImageOverlay
          source={image}
          imageStyle={{ borderBottomRightRadius: 65 }}
        ></ImageOverlay>
      </Container>
      {/* lightblue bbe1fa , greyish 1b262c*/}
      <View style={{ backgroundColor: "#1b262c", marginTop: 40 }}>
        <View style={{ paddingVertical: 10, paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#bbe1fa" }}>
            Trips
          </Text>
          <View
            style={{
              borderBottomWidth: 3,
              width: 200,
              paddingVertical: 5,
              borderColor: "#bbe1fa",
            }}
          ></View>
        </View>
        <View style={{ backgroundColor: "#1b262c", marginTop: 30 }}>
          <FlatList
            style={{ marginLeft: 10, marginRight: 10, marginBottom: 100 }}
            horizontal={true}
            data={tripStore.trips.filter(
              (item) => item.userId !== authStore.user.id
            )}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Trip Detail", { trip: item })
                    }
                  >
                    <Image
                      source={{
                        uri: item.image
                          ? item.image
                          : "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
                      }}
                      style={{
                        width: 200,
                        marginRight: 14,
                        height: 300,
                        borderRadius: 10,
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          position: "absolute",
                          color: "#fff",
                          marginTop: -4,
                          bottom: 7,
                          marginLeft: 8,
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default observer(ProfileTripList);
