//require('dotenv').config()

//const { parsed: localEnv } = require('dotenv').config()
//const webpack = require('webpack')
//module.exports = {
  //webpack(config) {
    //config.plugins.push(new Webpack.EnvironmentPlugin(localEnv))
    //return config
  //}
//}

const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass());
