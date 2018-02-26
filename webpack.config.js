const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const buildDir = path.resolve(__dirname, "./dist");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: buildDir
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    mode: "development",
    plugins: [
        // new HtmlWebpackPlugin()
    ]
};