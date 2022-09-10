import axios from '~/plugins/axios'

const headers = { 'Content-Type': 'multipart/form-data' }

export default (axios) => ({
  listFile(collectionName) {
    return axios.get(
      `/api/files?prefix=${collectionName ? collectionName : ':root'}`
    )
  },
  uploadFile(payload) {
    return axios.post(`/api/files`, payload)
  },
  getFile(fileName) {
    return axios.get(`/api/files/${fileName}?return_url=true`)
  },
  fileOperations(payload) {
    return axios.post(`/api/files/operations`, payload)
  },
  updateFileMetadata(payload) {
    return axios.put(`/api/files/${payload.fileName}`, payload.data)
  },
})
