import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL 

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

//Request interceptor to add the Authorization header
axiosInstance.interceptors.request.use(
  function (config) {
    
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    console.log(config);
    return config;
  },
  function (error) {
    console.error('Request error: ', error);
    return Promise.reject(error);
  }
);


//Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem('refreshToken');
        try {
            const response = await axiosInstance.post(`/token/refresh/`, { refresh: refreshToken });
            localStorage.setItem('accessToken', response.data.access);
            originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;
            return axiosInstance(originalRequest);
        } catch (error) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.href = '/login'; // Redirect to login page
            
        }
    } 
    return Promise.reject(error);    
  }
);

export default axiosInstance;