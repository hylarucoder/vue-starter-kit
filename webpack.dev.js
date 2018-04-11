const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
    historyApiFallback: true,
  },
  mode: 'development',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ],
  output: { publicPath: '/' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
})
