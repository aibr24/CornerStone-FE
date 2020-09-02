import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./components/Navigation";
import { registerRootComponent } from "expo";
// REVIEW: Ali, are you too lazy to remove the import as well?

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
