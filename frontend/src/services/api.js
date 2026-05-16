import axios from "axios";

const API = axios.create({
    baseURL: "https://ese-demo-candidate.onrender.com/api"
});

export default API;