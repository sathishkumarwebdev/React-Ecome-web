import axios from "axios";

export const productClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

productClient.interceptors.request.use((config)=> {
    
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    
   
    return config;
}, (err) => {
    return Promise.reject(err)
});