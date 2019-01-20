const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(commonConfig, {
    hot:true,
    mode:'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //模块热更新
        new webpack.NamedModulesPlugin()
    ]
})