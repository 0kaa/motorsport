export default (axios) => ({
    getSeries() {
        return axios.post(`get-series`)
    },
    getCategories() {
        return axios.get(`categories`)
    },
})
