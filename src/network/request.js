import Axios from "axios";
export function request(config) {
  const instance=Axios.create({
    baseURL:'http://123.207.32.32:8000/api/v1',
    timeout:5000
  })
  //axios的拦截器 请求拦截
  instance.interceptors.request.use(config=>{
    // console.log(config)
    return config
  },err=>{
    // console.log('错误',err)
  })
  instance.interceptors.response.use(res=>{
    // console.log(res)
    return res.data
  },err=>{
    console.log(err)
  })
  return instance(config)
}

