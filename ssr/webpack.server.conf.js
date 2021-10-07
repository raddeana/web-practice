const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.conf");
const webapckNodeExternals = require("webpack-node-externals");
const vueSSRServerPlugin = require("vue-server-renderer/server-plugin");

module.exports = merge(base, {
    //  告知webpack，需要在node端运行
    target:"node",
    entry:"./src/entry-server.js",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'server-buldle.js',
        libraryTarget: "commonjs2"
    },
    externals:[
        webapckNodeExternals()
    ],
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':'"development"',
            'process.ent.VUE_ENV': '"server"'
        }),
        new vueSSRServerPlugin()
    ]
});