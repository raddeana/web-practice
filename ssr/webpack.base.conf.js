const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin-webpack5");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  mode: 'development',
  entry: {
    app: "./src/entry-client.js"
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    publicPath: 'static'
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  module: {
      rules: [{
          test: /\.vue$/,
          use: [{
             loader: "vue-loader",
          }]
      }, {
         test: /\.css$/,
         use: [{
             loader: "css-loader",
         }]
     }],
  },
  plugins: [
      new VueLoaderPlugin()
  ]
};