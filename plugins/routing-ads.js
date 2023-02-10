export default ({ app }) => {
    app.router.afterEach((to, from) => {
        window.__adsConfig.repopulate()
    })
}