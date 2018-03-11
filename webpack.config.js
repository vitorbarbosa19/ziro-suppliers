const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const development = process.env.npm_lifecycle_event === 'dev'

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
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/transform-runtime', '@babel/plugin-proposal-class-properties']
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
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new webpack.DefinePlugin({
			'process.env': {
				AUTH_DOMAIN: JSON.stringify(development ? require('./credentials').AUTH_DOMAIN : process.env.AUTH_DOMAIN),
				AUTH_ID: JSON.stringify(development ? require('./credentials').AUTH_ID : process.env.AUTH_ID),
				AUTH_REDIRECT: JSON.stringify(development ? require('./credentials').AUTH_REDIRECT : process.env.AUTH_REDIRECT),
				AUTH_AUDIENCE: JSON.stringify(development ? require('./credentials').AUTH_AUDIENCE : process.env.AUTH_AUDIENCE),
				GRAPHQL_ENDPOINT: JSON.stringify(development ? require('./credentials').GRAPHQL_ENDPOINT : process.env.GRAPHQL_ENDPOINT)
			}
		})
	],
	devServer: { historyApiFallback: true } // config for webpack-dev-server when using react-router
}

development ? null : config.plugins.push([
	// new webpack.optimize.UglifyJsPlugin(), <- CAUSES BUILD ERRORS
	new webpack.optimize.ModuleConcatenationPlugin()	
])

module.exports = config
