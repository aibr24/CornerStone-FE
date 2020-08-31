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

// REVIEW: Ali, Is this still needed? I believe the issue is resolved already. Try removing it and let me know what happens please.
registerRootComponent(App);
export default App;
