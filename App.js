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

// what's this and why do you need it?
registerRootComponent(App);
export default App;
