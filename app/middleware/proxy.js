'use strict'

const proxy = require('koa-proxies')

module.exports = options => {
  const prefixKeys = Object.keys(options)
  for (let i = 0; i < prefixKeys.length; i++) {
    const prefixKey = prefixKeys[i]
    return proxy(prefixKey, options[prefixKey])
  }
}
