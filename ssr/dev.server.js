const serverConf = require("./webpack.server.conf");
const webpack = require("webpack");
const fs = require("fs");
const path = require("path");
const Mfs = require("memory-fs");
const axios = require("axios");

module.exports = (cb) => {
    const webpackComplier = webpack(serverConf);
    const mfs = new Mfs();
    
    webpackComplier.outputFileSystem = mfs;
    webpackComplier.watch({},async (error,stats) => {
        if(error) return console.log(error);
        stats = stats.toJson();
        stats.errors.forEach(error => console.log(error));
        stats.warnings.forEach(warning => console.log(warning));

        const serverBundlePath = path.join(serverConf.output.path, 'vue-ssr-server-bundle.json');
        const serverBundle = JSON.parse(mfs.readFileSync(serverBundlePath, "utf-8"));
        const clientBundle = require("fs").readFileSync(path.join(__dirname, "/static/vue-ssr-client-manifest.json"), "utf-8");
        const template = fs.readFileSync(path.join(__dirname,"/static/index.html"),"utf-8");
    
        cb && cb(serverBundle,clientBundle,template);
    })
};