module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    },
    name: 'Thunder',
    themeColor: '#20232a',
    msTileColor: '#FAFAFA'
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: './favicon.ico'
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/thunder'
    : '/'
}