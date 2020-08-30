import { decorate, observable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";
// REVIEW: Clean up your imports

class TripStore {
  trips = [];

  // REVIEW: In both `fetchTrips` and `createTrip`, `res` is not defined as a `const`. Tara this isn't Python. If this is working it doesn't mean that it won't cause issues later on.

  fetchTrips = async () => {
    try {
      res = await instance.get("/trips");
      this.trips = res.data;
    } catch (error) {
      console.log("TRIP-STORE >> fetchTrips() --->", error);
    }
  };

  createTrip = async (newTrip) => {
    try {
      res = await instance.post("/trips", newTrip);
      this.trips.push(res.data);
    } catch (error) {
      console.log("TRIP-STORE >> createTrip() --->", error);
    }
  };

  updateTrip = async (oldTrip) => {
    try {
      await instance.put(`/trips/${oldTrip.id}`, oldTrip);
      const foundTrip = this.trips.find((trip) => trip.id === oldTrip.id);
      for (const key in oldTrip) foundTrip[key] = oldTrip[key];
    } catch (error) {
      console.log("TRIP-STORE >> updateTrip() --->", error);
    }
  };

  deleteTrip = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip.id !== tripId);
      // REVIEW: Remove console log if done
      console.log(tripId);
    } catch (error) {
      console.log("TRIP-STORE >> deleteTrip() --->", error);
    }
  };
}

decorate(TripStore, {
  trips: observable,
});

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
