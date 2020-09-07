import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./components/Navigation";
import MainStack from "./components/Navigation/MainStack";
function App() {
  return (
    <NavigationContainer>
      <MainStack />
      {/* <MyTabs /> */}
    </NavigationContainer>
  );
}

export default App;
