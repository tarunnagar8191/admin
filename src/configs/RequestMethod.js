import axios from "axios";

const REACT_APP_YOUR_CLOUD_NAME = "dkhh3ayz8";
const REACT_APP_CLOUDINARY_KEY = "dakshin_murti";
// const REACT_APP_BASE_URL = "http://103.120.176.175:4000";
const REACT_APP_BASE_URL = "http://localhost:3000";


const BASE_URL = REACT_APP_BASE_URL + "/api/v1";

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export const YOUR_CLOUD_NAME = REACT_APP_YOUR_CLOUD_NAME;
export const CLOUDINARY_KEY = REACT_APP_CLOUDINARY_KEY;