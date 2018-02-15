/*eslint-disable*/
var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var isProduction = process.env.NODE_ENV === 'production';
var cssOutputPath = isProduction ? '/styles/app.[hash].css' : 'styles/app.css';
var jsOutputPath = isProduction ? '/scripts/app.[hash].js' : 'scripts/app.js';
var ExtractSASS = new ExtractTextPlugin(cssOutputPath);
var port = isProduction ? process.env.PORT || 8080 : process.env.PORT || 3000;

// ------------------------------------------
// Base
// ------------------------------------------
var webpackConfig = {
    node: { global: true, fs: 'empty' },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
            },
        }),
        new HtmlWebpackPlugin({
            template: Path.join(__dirname, './src/index.html'),
        }),

    ],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }, {
                test: /.jsx?$/,
                include: Path.join(__dirname, './src/client'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-decorators-legacy'],
                },
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: [/carbon-components/, /flexboxgrid/],
            }
        ],
    },
    target: 'web',
    node: {
        console: false,
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
    // externals: nodeModules,
};

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


// ------------------------------------------
// Entry points
// ------------------------------------------
webpackConfig.entry = !isProduction ? [
    Path.join(__dirname, './src/client/index')
] : [Path.join(__dirname, './src/client/index')];


// ------------------------------------------
// Bundle output
// ------------------------------------------
webpackConfig.output = {
    path: Path.join(__dirname, './dist'),
    filename: jsOutputPath,
};

// ------------------------------------------
// Devtool
// ------------------------------------------
webpackConfig.devtool = isProduction ? 'source-map' : 'cheap-module-source-map';

// ------------------------------------------
// Module
// ------------------------------------------
webpackConfig.module.loaders.push({
    test: /\.scss$/,
    // loaders: ['style-loader', 'css-loader', 'sass-loader'],
    use: [{
            loader: 'style-loader',
            options: { exclude: /flexboxgrid/, },
        },
        {
            loader: 'css-loader',
            options: {
                importLoaders: 2,
                exclude: /flexboxgrid/,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                plugins: () => [
                    require('autoprefixer')({
                        browsers: ['last 1 version', 'ie >= 11'],
                    }),
                ],
            },
        },
        {
            loader: 'sass-loader',
            options: {
                includePaths: [Path.resolve(__dirname, '..', 'node_modules')],
            },
        },
    ],
});

// ------------------------------------------
// Plugins
// ------------------------------------------
isProduction
    ?
    webpackConfig.plugins.push(
        new Webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        ExtractSASS
    ) :
    webpackConfig.plugins.push(
        new Webpack.HotModuleReplacementPlugin()
    );


module.exports = webpackConfig;