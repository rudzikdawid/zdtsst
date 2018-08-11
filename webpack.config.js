'use strict';

const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    context: path.join(__dirname, 'app'),
    target: "web",
    entry: {
        app: './index.js',
        vendor: Object.keys(pkg.dependencies),
        vendor_css: './styles/vendor.css',
        app_css: './styles/main.scss'
    },
    output: {
        filename: 'js/[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{loader: 'babel-loader', options: {presets: ['env', 'stage-2']}}],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [{loader: 'html-loader', options: {root: path.join(__dirname, 'app')}}],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{loader: 'css-loader'}, {loader: 'sass-loader'}]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{loader: 'css-loader'}]
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),

        new HtmlWebpackPlugin({
            template: './index.html'
        }),

        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css',
            allChunks: false
        })
    ]
};
