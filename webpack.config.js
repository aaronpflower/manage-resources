'use strict';

const path = require('path')
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

module.exports = function makeWebpackConfig() {
	var config = {};
	config.entry = {
		app: './client/app.js'
	};

	config.output = {
		path: __dirname + '/dist',
		// publicPath: isProd ? '/' : 'http://localhost:3001/',
		filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
		chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
	};

	if (isProd) {
		config.devtool = 'source-map';
	}
	else {
		config.devtool = 'cheap-module-source-map';
	}

	config.module = {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}, 
			{
				test: /\.css$/,
				loader: isTest ? 'null-loader' : ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: [
						{loader: 'css-loader', query: {sourceMap: true}}
						//   {loader: 'postcss-loader'}
					],
				})
			}, 
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
				loader: 'file-loader'
			}, 
			{
				test: /\.html$/,
				loader: 'raw-loader'
			}
		]
	};

	config.plugins = [
		new webpack.LoaderOptionsPlugin({
			test: /\.scss$/i,
			options: {
				postcss: {
					plugins: [autoprefixer]
				}
			}
		})
	];

	if (!isTest) {
		config.plugins.push(
			new HtmlWebpackPlugin({
				template: './client/index.html',
				inject: 'body'
			}),
			new ExtractTextPlugin({filename: 'css/[name].css', disable: !isProd, allChunks: true})
		)
	}

	if (isProd) {
		config.plugins.push(
			// Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
			// Only emit files when there are no errors
			new webpack.NoErrorsPlugin(),

			// Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
			// Dedupe modules in the output
			new webpack.optimize.DedupePlugin(),

			// Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
			// Minify all javascript, switch loaders to minimizing mode
			new webpack.optimize.UglifyJsPlugin(),

			// Copy assets from the public folder
			// Reference: https://github.com/kevlened/copy-webpack-plugin
			new CopyWebpackPlugin([{
				from: __dirname + '/client'
			}])
		)
	}

	config.devServer = {
		// https://github.com/chimurai/http-proxy-middleware#options ?
        proxy: {
            "/api": {
                target: "http://localhost:3000"
            }
        },
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3001,
        historyApiFallback: true
	};

	config.node = {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }

	config.resolve = {
		modules: [
			'node_modules',
			path.resolve(__dirname, 'client'),
		],
	}

	return config;
}();