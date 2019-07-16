'use strict'

module.exports = {
  proxy: {
    '/api': {
      target: 'http://www.example.org',
      changeOrigin: true,
      pathRewrite: {
        '/api': ''
      },
      router: {}
    }
  }
}
