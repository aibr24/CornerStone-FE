import { decorate, observable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";

class AuthStore {
  user = [];

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token); // this line needs an await
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token); // this line needs an await
      this.user = decode(res.data.token); // remove this line, you dont need it
      console.log("AuthStore -> signin -> res.data.token", res.data.token); // remove unnecessary console logs before pushing and merging to master
    } catch (error) {
      console.log("AuthStore -> signin ->error", error); // keep console logs like this one, necessary ones.
    }
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.expires >= currentTime) {
        this.setUser(token); // this line needs an await
      } else {
        this.signout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();
// why is this line commented?
// authStore.checkForToken();

export default authStore;
