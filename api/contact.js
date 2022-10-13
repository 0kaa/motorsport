export default (axios) => ({
    submitForm(data) {
        return axios.post(`/contact-us`, data)
    },
})
