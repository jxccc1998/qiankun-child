const { name } = require('./package');
const path = require('path')
module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },

    configureWebpack: {
        // 设置别名
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
        output: {
            // 微应用的包名，这里与主应用中注册的微应用名称一致
            library: `${name}-[name]`,
            // 将你的 library 暴露为所有的模块定义下都可运行的方式
            libraryTarget: 'umd',
            // 按需加载相关，设置为 webpackJsonp_MicroAppPlugin 即可
            jsonpFunction: `webpackJsonp_vue`,
        },
    },
};
