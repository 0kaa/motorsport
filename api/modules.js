import axios from '~/plugins/axios'

export default (axios) => ({
  getModules() {
    return axios.get(`/api/modules/`)
  },
  searchModules(q) {
    if (!q) {
      return axios.get(`/api/modules/`)
    } else {
      return axios.get(`/api/modules?q=${q}`)
    }
  },
  readModule(id) {
    return axios.get(`/api/modules/${id}`)
  },
  createModule(data) {
    return axios.post(`/api/modules/`, data)
  },
  releaseModule(id, data) {
    return axios.post(`/api/modules/${id}/release`, data)
  },
  deleteModule(id) {
    return axios.delete(`/api/modules/${id}`)
  },
})
