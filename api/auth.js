import axios from '~/plugins/axios'

export default (axios) => ({
  signup(signupForm) {
    return axios.post(`/api/users/signup/`, signupForm)
  },
  forgotPassword(email) {
    return axios.post(`/api/users/passwords/forget`, email)
  },
  confirmForgotPassword(data) {
    return axios.post(`/api/users/passwords/confirm`, data)
  },
  resendSignupConfirmationCode(email) {
    return axios.post(`/api/users/signup/confirm/resend`, email)
  },
  confirmSignup(data) {
    return axios.post(`/api/users/signup/confirm/`, data)
  },
  resetPassword(data) {
    return axios.post('/api/users/passwords/reset', data)
  },
  refreshToken(data) {
    return axios.post('/api/auth/refresh', data)
  },
})
