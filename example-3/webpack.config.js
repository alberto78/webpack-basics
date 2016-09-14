var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: './src/src.js',
    output: {
        path: './dist/',
        filename: 'dist.js'
    },
    module: {
        loaders: [ { test: /\.css$/, loader: ExtractTextPlugin.extract('css') } ]
    },
    plugins: [ new ExtractTextPlugin('dist.css') ]
    
}

module.exports = config;