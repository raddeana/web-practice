module.exports = function (api, options, dirname) {
    let t = api.types;

    return {
        visitor: {
            VariableDeclarator: {
                enter(path,state) {
                    if (path.node.id.name == 'a') {
                        path.node.id.name = "aaa";
                    }
                }
            }
        }
    }
};
