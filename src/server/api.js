import axios from 'axios';

const api = axios.create({
    baseURL: 'https://drop-and-take.herokuapp.com/',
});

export default api;