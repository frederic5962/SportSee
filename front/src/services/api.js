import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // l'API tourne sur ce port
});

export default api;
