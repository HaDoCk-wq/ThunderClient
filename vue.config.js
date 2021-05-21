module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    name: 'Thunder',
    workboxOptions: {
      swSrc: "src/service-worker.js"
    }
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {

      }
    }
  }
}