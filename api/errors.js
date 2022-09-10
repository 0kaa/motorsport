export default (axios) => ({
  getErrors(error) {
    //  return axios.post("/auth/password/forgot", { error });
    return error
  },
})
