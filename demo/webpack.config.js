var path = require('path');
var webpack = require('webpack');

module.exports = {
    debug: true,
    entry: {
        app: [
            './src/entry.js',
            './src/assets/app.css'
        ]
    },
    target: 'web',
    // Resolves are needed as we require a file that is
    // in a parent directory and webpack can't find node_modules
    // when we do this.
    resolveLoader: {
        root: path.join(__dirname, './node_modules')
    },
    resolve: {
        root: path.join(__dirname, './node_modules')
    },
    output: {
        publicPath: '/react-html5video/dist/',
        path: path.join(__dirname, './dist'),
        filename: 'app.js',
        chunkFilename: '[id].js'
    },
    module: {
        // Babel loader must be first as it's modified by server.js
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'inferno-app'],
                plugins: [ 'syntax-jsx', 'inferno']
            }

        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(svg|woff|ttf|eot|png|jpg|gif)(\?.*)?$/i,
            loader: 'url-loader?limit=10000'
        }]
    }
};
