import axios from "axios";

const api = axios.create({
    baseURL: "https://cineteka-flask-api.onrender.com",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default api;