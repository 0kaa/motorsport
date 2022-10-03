export default (axios) => ({
    getRaces(category) {
        return axios.post(`/get-schedule?cat=${category}`)
    },
    getRace(year, race) {
        return axios.post(`/get-race`, { year, race })
    },
})
