export default (axios) => ({
    getSeries() {
        return axios.post(`get-series`)
    },
})
