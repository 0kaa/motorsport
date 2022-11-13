export default (axios) => ({
    getSeries() {
        return axios.post(`get-series`)
    },
    getCategories() {
        return axios.get(`categories`)
    },
    navbarContent(category, year) {
        return axios.post(`/navbar_content?cat=${category}&year=${year}`)
    }
})
