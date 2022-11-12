export default (axios) => ({
    getArticle(category, slug, cat_id = 1) {
        return axios.get(`/${category}/${slug}?cat=${cat_id}`)
    },
    getArticles() {
        return axios.get(`/home`)
    },
    getArticlesByTitle(title, page = 1) {
        return axios.post(`/search?page=${page}&q=${title}`)
    },
    getItemsByCategory(category, i) {
        return axios.get(`/${category}?page=${i}`)
    },
    getItemsByTag(tag, i) {
        return axios.post(`/tags/${tag}?page=${i}`)
    },
    getItemsByDriver(driver, series, i) {
        return axios.post(`/drivers/${driver}?series=${series}&page=${i}`)
    },
    getItemsByTeam(team, series, i) {
        return axios.post(`/teams/${team}?series=${series}&page=${i}`)
    },
    getRecommendedArticle(id) {
        return axios.post(`/get-recommended-article/${id}`)
    },
    getLatestThreeArticles() {
        return axios.post(`/get-latest-articles`)
    }
})
