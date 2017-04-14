var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/client/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        'bootstrap-loader',
        './client/app.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
		modules: [
			'node_modules',
			path.resolve(__dirname, 'client'),
		]
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
			loader: 'style-loader!css-loader?modules'
		},
        {
            test: /\.(woff2?|ttf|eot|svg)$/,
            loader: 'url?limit=10000'
        },
		{
            test: /bootstrap-sass\/assets\/javascripts\//,
            loader: 'imports?jQuery=jquery'
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
		HTMLWebpackPluginConfig
    ],
    devServer: {
        hot: true,
        proxy: {
            "/api": {
                target: "http://localhost:3000"
            }
        },
    }
};