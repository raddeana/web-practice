/**
 * vue 配置
 * @author Philip
 */

const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
    configureWebpack (config) {
        config.plugins.push(new PrerenderSpaPlugin({
            staticDir: path.join(__dirname,'dist'),
            routes: ['', '/home','/login']
        }));
    }
}