import axios, { AxiosError } from 'axios'

export const defaultAxios = axios.create({
  baseURL: process.env.BASE_URL || 'http://127.0.0.1:8001', // URL 기본 세팅
  timeout: 2500, // 연결 자동 끊길 시간, 2500이면 2.5초
  withCredentials: true, // 쿠키 전송시 사용
})

/**
 * Request 에 대한 config 및 error handler
 */
defaultAxios.interceptors.request.use(config => {
  // @TODO: header 연결하거 추가하기
  return config
}, (error: AxiosError) => {
  // @TODO Error 표출방법 변경하기
  console.error(error)
})

/**
 * Response 에 대한 config 및 error handler
 */
defaultAxios.interceptors.response.use(config => {
  // @TODO: header 연결하거 추가하기
  return config
}, (error: AxiosError) => {
  // @TODO Error 표출방법 변경하기
  console.error(error)
})

export default defaultAxios
