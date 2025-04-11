import axios from "axios";

const api = axios.create({
    baseURL: "BASE_URL",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default api;