export default (axios) => ({
  editUser(data) {
    return axios.put(`/api/users`, data)
  },
  ReadUserActionLog(data) {
    return axios.get(`/api/users/actions`, data)
  },
  getUserConsumption(data) {
    return axios.get(`/api/users/consumption`, data)
  },
})
