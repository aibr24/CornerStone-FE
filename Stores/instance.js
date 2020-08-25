import axios from "axios";

const instance = axios.create({
  baseURL: "https://fierce-temple-99031.herokuapp.com/",
});

export default instance;
