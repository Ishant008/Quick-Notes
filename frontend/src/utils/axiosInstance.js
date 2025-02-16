import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:"https://quick-notes-backend-55yo.onrender.com"
})

axiosInstance.interceptors.request.use(
  (config)=>{
    let token = localStorage.getItem("token")
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },(error)=>{
    return Promise.reject(error)
  }
)

export default axiosInstance;
