module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {

      }
    }
  }
}