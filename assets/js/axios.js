import axios from 'axios';
import Qs from 'qs';


console.log('process.env.ENV_API',process.env.ENV_API)

const Axios = axios.create({
  baseURL: process.env.ENV_API,
  // 请求前的数据处理
  transformRequest: [function (data) {
    return Qs.stringify(data)
  }],
  headers: {
    // 'Content-Type': 'application/json;charset=UTF-8' //数据格式
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  withCredentials: true, //是否允许读取本地cookie
  //request timeout
  timeout: 50000
})



//请求拦截器
Axios.interceptors.request.use(
  config => {
    // 发送请求之前
    //公用请求参数可以在这配置
    //config.token=
    return config
  },
  error => {
    //请求错误时
    console.log(error)
    return Promise.reject(error);
  })

// 响应拦截器
Axios.interceptors.response.use(
  res => {
    // 状态码为200，接口请求成功
    if (res.status === 200) {
      return Promise.resolve(res.data);
    } else {
      return Promise.reject(res);
    }
  },
  error => {
    console.log(error, error.response)
    // errorHandle(error)

    return Promise.reject(error)
  })

export default Axios