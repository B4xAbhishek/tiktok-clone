import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backends.herokuapp.com/",
});

export default instance;
