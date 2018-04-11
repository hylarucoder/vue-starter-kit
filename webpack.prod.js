const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const OfflinePlugin = require('offline-plugin')

module.exports = merge(common, {
  dependencies: ['vendor'],
  devtool: 'source-map',
  plugins: [
    // short-circuits all Vue.js warning code
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new CleanWebpackPlugin(['build']),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: path.resolve(__dirname, 'dll/manifest.json'),
    }),
    new HtmlWebpackPlugin({
      title: 'vue start kit production',
      template: 'public/index.html',
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './dll/vendor**.js'),
      includeSourcemap: true,
      hash: true,
    }),
    // new OfflinePlugin(),
  ],
  output: {
    publicPath: '',
  },
})
