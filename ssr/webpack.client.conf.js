const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");
const vueSSRClientPlugin = require("vue-server-renderer/client-plugin");

module.exports = merge(baseWebpackConfig,{
    plugins:[
        new vueSSRClientPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ] 
});