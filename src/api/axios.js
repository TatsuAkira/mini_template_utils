import axios from 'axios'
import { notification } from 'antd'
import { getToken } from '@/util/utils'

const service = axios.create({
  baseURL: '',
  //   headers: {
  //     token:
  //       process.env.FeVersion === 'token'
  //         ? sessionStorage.getItem('token')
  //         : undefined,
  //   },
  timeout: 60000,
})

// service.interceptors.request.use(
//   config => {
//     const token = getToken()
//     if (token) {
//       config.headers.Authorization = token
//     }
//     return config
//   },
//   err => {
//     return Promise.reject(err)
//   }
// )

service.interceptors.response.use(
  (response) => {
    const { data } = response

    return data
  },
  (error) => {
    const {
      response: { data },
    } = error
    const title = `${data.error}--${data.status}`
    notification.error({
      message: title,
      description: data.message || '数据请求出错,请重试!',
    })

    return Promise.reject(data)
  }
)
/**
 * 对应文件夹的get、post请求事例❗️
 */
//  GET:
// export function certifiedTableList(url, params) {
//     return request.get(url, { params })
//   }

//  POST:
//   export function certifiedSaveCase(url, data) {
//     return request.post(url, { ...data })
//   }

export default {
  get(url, data, options) {
    return service({
      ...options,
      url,
      method: 'GET',
      params: { ...data, token: getToken() },
    })
  },
  post(url, data, options) {
    return service({
      ...options,
      url,
      method: 'POST',
      params: { token: getToken() },
      data: { ...data },
    })
  },
  delete(url, data) {
    return service({
      url,
      method: 'DELETE',
      params: { token: getToken() },
      data: { ...data },
    })
  },
  put(url, data) {
    return service({
      url,
      method: 'PUT',
      params: { token: getToken() },
      data: { ...data },
    })
  },
}

// window.service = service  // 挂载在window上可直接调用
