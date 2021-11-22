const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    mode: "development",
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
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.vue$/,
            loader: "vue-loader"
        }, {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [{
                loader: "css-loader",
            }]
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};