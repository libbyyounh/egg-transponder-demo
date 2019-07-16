/* eslint valid-jsdoc: "off" */

'use strict'
const proxy = require('./proxy.js')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1562685340192_5682'

  // add your middleware config here
  config.middleware = ['proxy']

  // add your user config here
  const userConfig = {
    proxy
  }

  return {
    ...config,
    ...userConfig
  }
}
