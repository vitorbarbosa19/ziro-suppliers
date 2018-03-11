const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						],
						plugins: [
							'@babel/transform-runtime',
							'@babel/plugin-proposal-class-properties'
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'raw-loader']
			},
			{
				test: /_redirects$/,
				use: 'file-loader?name=_redirects'
			}
		]
	},
	plugins: [ new HtmlWebpackPlugin({ template: './src/index.html' }) ],
	devServer: { historyApiFallback: true } // config for webpack-dev-server when using react-router
}

if (process.env.npm_lifecycle_event === 'dev') {
	const credentials = require('./credentials')
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env': {
				AUTH_DOMAIN: JSON.stringify(credentials.AUTH_DOMAIN),
				AUTH_ID: JSON.stringify(credentials.AUTH_ID),
				AUTH_REDIRECT: JSON.stringify(credentials.AUTH_REDIRECT),
				AUTH_AUDIENCE: JSON.stringify(credentials.AUTH_AUDIENCE),
				GRAPHQL_ENDPOINT: JSON.stringify(credentials.GRAPHQL_ENDPOINT)
			}
		})
	)
}

if (process.env.npm_lifecycle_event === 'build') {
	config.plugins.push(
		// new webpack.optimize.UglifyJsPlugin(), <- CAUSES BUILD ERRORS
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
				AUTH_ID: JSON.stringify(process.env.AUTH_ID),
				AUTH_REDIRECT: JSON.stringify(process.env.AUTH_REDIRECT),
				AUTH_AUDIENCE: JSON.stringify(process.env.AUTH_AUDIENCE),
				GRAPHQL_ENDPOINT: JSON.stringify(process.env.GRAPHQL_ENDPOINT)
			}
		})
	)
}

module.exports = config
