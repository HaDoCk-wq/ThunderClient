module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    },
    name: 'Thunder',
    themeColor: '#61dafb'
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {

      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist'
    : '/'
}