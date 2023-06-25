import axios from 'axios';

const API_KEY = "5ae2e3f221c38a28845f05b632fe49155f710587962bf75b0b700e4a";

const API = axios.create({
    baseURL: `http://127.0.0.1:8000/api/v1/`, // replace with the base URL of your API
    timeout: 10000, // request timeout, in milliseconds
    headers: { 'Content-Type': 'application/json' },
});

export default API;

export const getPlaces = () => {
    return API.get(`locations`);
};
