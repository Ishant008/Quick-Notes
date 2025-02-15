import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:"http://localhost:8000"
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