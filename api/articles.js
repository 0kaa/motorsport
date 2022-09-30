export default (axios) => ({
    getArticle(category, slug) {
        return axios.get(`/${category}/${slug}`)
    },
    getArticles() {
        return axios.get(`/home`)
    },
})
