const webpack = require('webpack');
const chalk = require("chalk");
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*最上面要增加的声明变量*/
const HappyPack = require('happypack');
const os = require('os'); //获取电脑的处理器有几个核心，作为配置传入
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: {
        app:__dirname + '/../src/app.js',
        // vendors:'../src/'
    },
    output:{
        filename: '[name].js',
        path:__dirname + '/../dist'
    },
    module: {
        rules:[
            {
                loader: 'html-loader',
                test:/\.(html|htm)$/
            },
            {
                test:/\.css$/,
                loader: 'style-loader'
            },
            {
                test:/\.css$/,
                loader: 'css-loader',
                options: {
                    modules: true
                }
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test:/\.jsx$/,
                exclude: /node_modules/,
                loader: 'happypack/loader?id=happy-babel-js',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/../index.html'
        }),
        /*在`plugins`配置项中需要增加的插件设置*/
        new HappyPack({ //开启多线程打包
            id: 'happy-babel-js',
            loaders: ['babel-loader?cacheDirectory=true'],
            threadPool: happyThreadPool
        }),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
        })
    ]
};