import axios from 'axios';

const API = axios.create({
    baseURL: `https://azrs.projekti.online/api/v1/`, // replace with the base URL of your API
    timeout: 10000, // request timeout, in milliseconds
    headers: { 'Content-Type': 'application/json' },
});

export default API;

export const getPlaces = () => {
    return API.get(`home-places`);
};
export const getAllPlaces = () => {
    return API.get(`home-places`);
};

export const getPlace = (id) => {
    return API.get(`locations/${id}`)
}

export const getBlogs = () => {
    return API.get('blogs')
}

export const getBlog = (id) => {
    return API.get(`blogs/${id}`)
}
