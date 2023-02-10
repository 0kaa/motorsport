export default ({ app }) => {
    app.router.afterEach((to, from) => {
        // window.__adsConfig.repopulate()
        // if (typeof window !== 'undefined' && window.__adsConfig && to.path !== from.path) {
        //     window.__adsConfig.repopulate()
        // }
    })
}