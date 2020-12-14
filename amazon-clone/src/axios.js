import axios from "axios";

const instance = axios.create({
  //the cloud function url
  baseURL: "http://localhost:5001/clone-c661f/us-central1/api",
});
export default instance;
