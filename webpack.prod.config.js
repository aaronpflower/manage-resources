var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extension: ['', '.js']
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.html$/,
            loader: 'raw'
        },
        {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		},
        {
            test: /\.(woff2?|ttf|eot|svg)$/,
            loader: 'url?limit=10000'
        }
        ]
    }
};