export default (axios) => ({
    getStandings(category) {
        return axios.post(`/get-standings?cat=${category}`)
    },
})
