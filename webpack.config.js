// Import Webpack npm module
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const bootstrapEntryPoints = require('./webpack.bootstrap.config');

const isProd = process.env.NODE_ENV === 'production'; //true or false
const cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    loader: ['css-loader', 'sass-loader'],
    publicPath: '/dist'
})
const cssConfig = isProd ? cssProd :cssDev;
const bootstrapConfig =isProd? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;


module.exports = {
    entry: {
        app: "./src/index.tsx",
        bootstrap: bootstrapConfig
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map.js'
    },
    resolve:{
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module:{
        rules: [
            {
            test: /\.tsx?$/,
            loader: "ts-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=images/[name].[ext]',
                    'image-webpack-loader'
                ]
            },
            { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file-loader' },
        ],
    },
};