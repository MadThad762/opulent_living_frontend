import axios from 'axios';

const baseURL = process.env.BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add request and response interceptors for logging or other functionality
/* axiosInstance.interceptors.request.use(
  (request) => {
    console.log('Starting Request', request);
    // Modify request here
    return request;
  },
  (error) => {
    console.log('Request error:', error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response);
    // Modify response here
    return response;
  },
  (error) => {
    console.log('Response error:', error);
    return Promise.reject(error);
  },
); */

export default axiosInstance;
