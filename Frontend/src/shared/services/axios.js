import axios from 'axios';

// Create an Axios instance
const axiosinstance = axios.create({
  baseURL: 'http://localhost:3000',  // Base URL of your backend API
  headers: {
    'Content-Type': 'application/json',  // Set default headers
  },
});

// You can also add interceptors, for example, to handle errors globally
axiosinstance.interceptors.response.use(
  (response) => response,  // Simply return the response if successful
  (error) => {
    console.error('API call error:', error);
    return Promise.reject(error);  // Reject the promise if an error occurs
  }
);

export default axiosinstance;  // Export the Axios instance
