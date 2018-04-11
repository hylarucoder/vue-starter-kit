const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vue start kit',
      template: 'public/index.html',
    })
  ],
  mode: 'production',
  output: {
    filename: 'main.[hash:8].js',
    chunkFilename: '[name].[hash:8].chunk.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
}
