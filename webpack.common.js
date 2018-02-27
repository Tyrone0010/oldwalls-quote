var path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    /* The entry point of the application. Webpack uses this information to create the dependency tree which is used to bundle the scripts.*/
    entry: ["./src/public.tsx"],
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            title: 'Production'
        })
   ],
    /* This information is used to give the name of the bundled file and the location of the bundled file. */
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/build/",
        filename: "bundle.js"
    },
    /* The extensions which will be imported or required in the application scripts. */
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        // rules: [
        //     { test: /\.js$/, loader: 'source-map-loader', enforce: 'pre' }
        // ],
        /* Define the loaders to be used. Regex will test the type of files on which the loader is to be applied. The excluded files are also mentioned. Loaders are used mainly to preprocess/transpile the file when imported or required in the scripts before bundling. */
        loaders: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/
        }]
    }};
module.exports = config;