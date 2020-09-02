import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./components/Navigation";

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
