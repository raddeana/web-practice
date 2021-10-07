const devServer = require("./dev.server.js");
const express = require("express");

const serve = require("express-static");
const path = require("path");

const app = express();
app.use('/static', serve(__dirname + path.sep + "static"));
const vueRender = require("vue-server-renderer");

app.get('*',(request,respones) => {
    respones.status(200);
    respones.setHeader("Content-Type","text/html;charset-utf-8;");

    devServer((serverBundle, clientBundle, template) => {
        let render = vueRender.createBundleRenderer(serverBundle,{
            template,
            clientManifest:clientBundle.data,
            //  每次创建一个独立的上下文
            renInNewContext:false
        }); 
        render.renderToString({
            url:request.url
        }).then((html) => {
            console.log('鹅肝');
            console.log(html);
            respones.end(html);
        }).catch(error => {
            console.log('error');
            console.log(error);
          respones.end(JSON.stringify(error));
        });
    });
})

app.listen(3031,() => {
    console.log("服务已开启")
});