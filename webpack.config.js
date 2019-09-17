const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	mode: 'production',
	devtool: '#source-map',
	entry: './src/main.js',

	output: {
		filename: 'widgetchat.js',
		path: path.resolve(__dirname, 'dist')
	},

	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},

	plugins: [
		new webpack.ProgressPlugin(), 
		new MinifyPlugin(),
		new VueLoaderPlugin()
	],

	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			  },
		]
	},

	devServer: {
		open: true
	}
};