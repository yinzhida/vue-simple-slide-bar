var webpackConfig = require('./webpack.conf')
var config = require('./config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')

webpackScriptConfig = Object.assign({}, webpackConfig, {
  externals: undefined,
  output: {
    path: config.outputDir,
    filename: `${config.outputJSName}.umd.js`,
    library: config.outputJSName,
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin({
      filename: `${config.outputCssName}.umd.css`
    }),
  ]
})

module.exports = webpackScriptConfig