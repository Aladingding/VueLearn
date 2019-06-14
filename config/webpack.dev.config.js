const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueloaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode:'development',
    entry: {
        app: './src/entry/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                exclude:/node_modules/,
                use:{
                    loader: 'vue-loader',
                    options:{
                        extrackCss:true // 提取vue文件中的style为单个css文件
                    }
                }
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                },
            }
        ]
    },
    plugins:[
        new VueloaderPlugin(),
        new webpack.HotModuleReplacementPlugin(), // 热更新，不刷新页面异步更新,熱更新需要引入額外代碼在入口文件
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:"./src/html/index.html",
            inject:true
        })
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'), // 告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要
        open: true, // 启动后打开浏览器
        port: 8088, // 启动本地服务端口号
        hot: true, // 热更新
        inline: true, // 自动刷新
    },
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',  //设置别名，不然使用 import  识别不了 vue
            '@': path.join(__dirname, 'src')
        }
    },
    // webpack 4.0 之后独立出来，在配置文件中，配置才能生效，以前直接在packjson.script命令行中配置--colors也行
    stats: { colors: true, version: true },
};