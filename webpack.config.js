/*eslint-disable*/
var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT || 8080 : process.env.PORT || 3000;

var cssOutputPath = isProduction ? '/styles/app.css' : 'styles/app.css';
var jsOutputPath = isProduction ? '/scripts/app.js' : 'scripts/app.js';

module.exports = {
    entry: './src/client/index.jsx',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
        }),
        new ExtractTextPlugin({ // define where to save the file
            filename: 'app.bundle.css',
            allChunks: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'shared',
            minChunks: Infinity
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor: {
        //         warnings: false,
        //     },
        // }),
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'filename[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /.jsx?$/,
                include: path.join(__dirname, './src/client'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-decorators-legacy'],
                },
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: [/flexboxgrid/, path.resolve('./src/client/')],
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
            },
        ]
    }
}