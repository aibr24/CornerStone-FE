import { decorate, observable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";

class AuthStore {
  user = []; // REVIEW: Why is the user an empty array?

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      await this.setUser(res.data.token);
      // REVIEW: Why are you decoding the token twice? This will cause issues later, please remove it
      this.user = decode(res.data.token);
      // REVIEW: Remove the console log if signin is working
      console.log("AuthStore -> signin -> res.data.token", res.data.token);
    } catch (error) {
      alert("AuthStore -> signin ->error", error);
    }
  };

  signout = async () => {
    try {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("myToken");
      // REVIEW: Remove the console log if signout is working
      console.log(" sighOut----this toke is ", token);
      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };
  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    // REVIEW: Remove the console log if this is working
    console.log("check ----this toke is ", token);
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.expires >= currentTime) {
        await this.setUser(token);
      } else {
        // REVIEW: Remove the console log if this is working
        console.log("no Token");
        this.signout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
