import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "./components/Navigation";
import { registerRootComponent } from "expo";

function App() {
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
}

registerRootComponent(App);
export default App;
