import axios from 'axios';
import Qs from 'qs';

// const getBaseURL = () => {
//   switch (process.env.NODE_ENV) {
//     case 'production':
//       return '/'
//     case 'development':
//       return '/api/'
//     case 'test':
//       return '/'
//     default:
//       return '/'
//   }
// }

console.log('process.env.ENV_API',process.env.ENV_API)

function removeParam(key, sourceURL) {
  var rtn = sourceURL.split("?")[0],
      param,
      params_arr = [],
      queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
  if (queryString !== "") {
      params_arr = queryString.split("&");
      for (var i = params_arr.length - 1; i >= 0; i -= 1) {
          param = params_arr[i].split("=")[0];
          if (param === key) {
              params_arr.splice(i, 1);
          }
      }
      rtn = rtn + "?" + params_arr.join("&");
  }
  return rtn;
}

// function judgeProtocol () {
//   const protocolData = document.location.protocol
//   if (protocolData === 'http:' ) {
//     return process.env.ENV_API
//   }
//   return process.env.ENV_API
// }

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
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // let redirect_url = window.location.href;
          // redirect_url = removeParam('code',redirect_url);
          // console.log('code',redirect_url);
          // redirect_url = removeParam('state',redirect_url);
          // console.log('state',redirect_url);
          // redirect_url = encodeURIComponent(redirect_url);
          // console.log('loginUrl',redirect_url);
          // const loginUrl = process.env.ENV_API+'Mobile/Login/index?redirect_url='+redirect_url;
          // console.log('loginUrl',loginUrl);
          // window.location.href = loginUrl;
          
          break;
        case 404:
          error.message = '请求错误,未找到该资源';
          break;
        case 500:
          error.message = '服务器端出错';
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    }
    return Promise.reject(error)
  })

export default Axios