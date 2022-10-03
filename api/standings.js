export default (axios) => ({
    getStandings(category) {
        return axios.post(`/get-standings?cat=${category}`)
    },
    getDrivers(category, year) {
        return axios.post(`/get-drivers?cat=${category}&year=${year}`)
    }
})
