import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./components/Navigation";
import { registerRootComponent } from "expo";

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// REVIEW: Ali, Is this still needed? I believe the issue is resolved already. Try removing it and let me know what happens please.
export default App;
