const express = require("express");
const serve = require("express-static");
const path = require("path");

const app = express();
app.use('/static', serve(__dirname + path.sep + "static"));

const App = require("./src/entry-server.js");


const vueServerRender = require("vue-server-renderer").createRenderer({
    template: require("fs").readFileSync(path.join(__dirname,"./static/index.html"),"utf-8")
});

app.get("*", async(request, response) => {
    response.status(200);
    response.setHeader("Content-type", "text/html;charset-utf-8");

    const {url} = request;
    const vm = await App({ url })

    vueServerRender.renderToString(vm).then((html) => {
        response.end(html);
    }).catch(err => console.log(err))
})

app.listen(3031, () => {
    console.log("服务已开启")
})