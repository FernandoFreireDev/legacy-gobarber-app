import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fernandofreire-gobarber-api.herokuapp.com',
});

export default api;
