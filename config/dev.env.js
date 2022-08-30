'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_API_KEY:'"AIzaSyABRzZLE2wnto4UmaN4BQT-6IurzHn1iqI"'
})
