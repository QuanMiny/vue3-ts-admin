// 根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test

// import { OPENHUB_API_PROD } from '../api'

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '/api'
} else {
  BASE_URL = 'http://aa.com/test'
}

export { BASE_URL, TIME_OUT }
