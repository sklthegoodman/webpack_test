/**
 * Created by wrynnsun on 15/12/1.
 */
var path = require('path');
var config = {
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    resolve: {
        alias: {

        }
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loader: "babel",
                query:{
                    presets:["react","es2015"]
                }
            }
        ],
        noParse:[

        ]
    }
};

//使用mini文件
var node_modules = path.resolve(__dirname, 'node_modules');
var deps = {
    "react":'react/dist/react.min.js',
    "react-dom":'react-dom/dist/react-dom.min.js'
};
Object.keys(deps).forEach(function (name) {
    var pathToMini = path.resolve(node_modules, deps[name]);
    config.resolve.alias[name] = pathToMini;
    config.module.noParse.push(pathToMini);
});

module.exports = config;