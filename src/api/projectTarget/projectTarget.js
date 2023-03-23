import request from '@/api/axios.js'

// 核证副本-> 数据库表单名称列表
export function certifiedTableList(url, params) {
  return request.get(url, { params })
}
