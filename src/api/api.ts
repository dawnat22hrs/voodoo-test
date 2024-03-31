import axios from 'axios'
import config from './config'

export const HTTP = axios.create({
  baseURL: config.MOCK
})

export default {
  async getPosts() {
    try {
      const response = await HTTP.get('/posts')
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async getUserById(id: number) {
    try {
      const response = await HTTP.get(`/users/${id}`)
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
}
