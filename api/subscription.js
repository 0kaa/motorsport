export default (axios) => ({
  getSubscription(id) {
    return axios.get(`/api/subscription/${id}`)
  },
})
