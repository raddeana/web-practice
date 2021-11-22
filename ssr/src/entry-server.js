const createApp = require("./app.js");

module.exports = context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp(context)

    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }

      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        context.state = store.state

        resolve(app)
      }).catch(reject)
    }, reject)
  })
}