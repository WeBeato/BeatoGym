import axios from "axios";

const apiRequest = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
});

export default apiRequest