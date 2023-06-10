import { API_KEY, BASE_API_URL, hash, ts } from "../constants.js";
import axios from "axios";

axios.defaults.baseURL = BASE_API_URL;

axios.defaults.params = {
  apikey: API_KEY,
  hash: hash,
  ts: ts,
};
