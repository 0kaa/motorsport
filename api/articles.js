export default (axios) => ({
    getArticle(category, slug) {
        return axios.get(`/${category}/${slug}`)
    },
    getArticles() {
        return axios.get(`/home`)
    },
    getItemsByCategory(category, i) {
        return axios.get(`/${category}?page=${i}`)
    },
    getItemsByTag(tag, i) {
        return axios.post(`/tags/${tag}?page=${i}`)
    },
    getItemsByDriver(driver, i) {
        return axios.post(`/drivers/${driver}?page=${i}`)
    },
    getItemsByTeam(team, i) {
        return axios.post(`/teams/${team}?page=${i}`)
    },
    getRecommendedArticle() {
        return axios.post(`/get-recommended-article`)
    }
})
