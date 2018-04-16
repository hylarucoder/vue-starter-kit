const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}

console.log(resolve("src"));

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "vue start kit",
      template: "public/index.html"
    })
  ],
  mode: "production",
  output: {
    filename: "main.[hash:8].js",
    chunkFilename: "[name].[hash:8].chunk.js",
    path: path.resolve(__dirname, "build"),
    publicPath: ""
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          resolve("src"),
          resolve("test"),
          resolve("node_modules/vue-echarts"),
          resolve("node_modules/resize-detector")
        ],
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src")
    },
    extensions: [".js", ".vue", ".json"]
  }
};
