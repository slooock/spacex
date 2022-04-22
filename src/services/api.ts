import axios, { AxiosInstance } from "axios";

function buildInstance(): AxiosInstance {
  return axios.create({
    baseURL: "https://api.spacexdata.com/v3/",
  });
}

export function unsecuredApi(): AxiosInstance {
  return buildInstance();
}
