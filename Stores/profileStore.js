import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProfileStore {
  profiles = [];

  constructor() {
    makeAutoObservable(this);
  }
  getProfileById = (ownerId) =>
    this.profiles.find((profile) => profile.userId === ownerId);

  fetchProfiles = async () => {
    try {
      const res = await instance.get("/profiles");
      this.profiles = res.data;
    } catch (error) {
      console.log("TRIP-STORE >> fetchProfiles() --->", error);
    }
  };

  updateProfile = async (oldProfile) => {
    try {
      await instance.put(`/profiles`, oldProfile);
      const foundProfile = this.profiles.find(
        (profile) => profile.id === oldProfile.id
      );
      for (const key in oldProfile) foundProfile[key] = oldProfile[key];
    } catch (error) {
      console.log("TRIP-STORE >> updateProfile() --->", error);
    }
  };
}

const profileStore = new ProfileStore();
profileStore.fetchProfiles();

export default profileStore;
