const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        app: './src/entry/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:"./src/html/index.html",
            inject:true
        })
    ]
};