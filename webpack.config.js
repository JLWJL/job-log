'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './client/index.html',
	filename: 'index.html',
	inject: 'body'
});


module.exports ={
	entry:'./client/index.js', //entry file where the bundler starts the bundling process.
	output: { //location where the bundled Javascript code is to be saved.
		path: __dirname +'/dist',
		filename: 'index_bundle.js',

	},

	module: {
		loaders:[ //To interprate JSX, JS; transformations that are applied on a file in our app.
			{
				test:/\.js$/, loader: 'babel-loader', exclude: /node_modules/
			},
			{
				test:/\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
			},
			{
				test: /\.css$/, loader: "style-loader!css-loader"
			}
		],
	},

	plugins: [HtmlWebpackPluginConfig]
};
