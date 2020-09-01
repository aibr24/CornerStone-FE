import React from "react";
import { BoxItemContainer, BoxItemImage, BoxItemText } from "./styles";
import { Body, Title } from "native-base";

function ProfileTripItem({ trip }) {
  return (
    <BoxItemContainer>
      <BoxItemText>{trip.title}</BoxItemText>
      <BoxItemImage
        source={{
          uri: trip.image
            ? trip.image
            : "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
        }}
      />
    </BoxItemContainer>
  );
}

export default ProfileTripItem;
