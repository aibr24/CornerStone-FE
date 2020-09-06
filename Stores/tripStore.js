import { decorate, observable } from "mobx";
import instance from "./instance";

class TripStore {
  trips = [];

  fetchTrips = async () => {
    try {
      const res = await instance.get("/trips");
      this.trips = res.data;
    } catch (error) {
      console.log("TRIP-STORE >> fetchTrips() --->", error);
    }
  };

  createTrip = async (newTrip) => {
    try {
      const res = await instance.post("/trips", newTrip);
      this.trips.push(res.data);
    } catch (error) {
      console.log("TRIP-STORE >> createTrip() --->", error);
    }
  };

  updateTrip = async (oldTrip) => {
    try {
      await instance.put(`/trips/${oldTrip.id}`, oldTrip);
      const foundTrip = await this.trips.find((trip) => trip.id === oldTrip.id);
      for (const key in oldTrip) foundTrip[key] = oldTrip[key];
    } catch (error) {
      console.log("TRIP-STORE >> updateTrip() --->", error);
    }
  };

  deleteTrip = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip.id !== tripId);
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
