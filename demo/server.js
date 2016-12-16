var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var compiler;
var server;

// Source maps
config.devtool = 'sourcemap';

config.output.publicPath = '/dist/';

// Remove minification to speed things up.
config.plugins.splice(1, 2);

compiler = webpack(config);
server = new webpackDevServer(compiler, {
    publicPath: config.output.publicPath,
});
server.listen(8082);
