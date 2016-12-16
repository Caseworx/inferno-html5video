var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: [
        // CSS Must be first or the Video component will not be
        // exported.
        './src/assets/video.css',
        './src/components/video/video.js'
    ],
    target: 'web',
    output: {
        path: './dist',
        filename: 'InfernoHtml5Video.js',
        libraryTarget: 'umd',
        library: 'InfernoHtml5Video'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'inferno-app'],
                plugins: [ 'syntax-jsx', 'inferno']
            }
        }, {
            test: /\.(svg|woff([\?]?.*)|ttf([\?]?.*)|eot([\?]?.*)|svg([\?]?.*))$/i,
            loader: 'url-loader?limit=10000'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }]
    },
    plugins: [
        new ExtractTextPlugin('InfernoHtml5Video.css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
};
