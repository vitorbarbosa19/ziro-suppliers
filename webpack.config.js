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
	plugins: [ new HtmlWebpackPlugin({ template: './src/index.html' }) ]
}

// if (process.env.NODE_ENV !== 'production') {
// 	const { backendUrl } = require('./credentials')
// 	config.plugins.push(
// 		new webpack.DefinePlugin({
// 			'process.env': {
// 				BACKEND_URL: JSON.stringify(backendUrl)
// 			}
// 		})
// 	)
// }

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				// BACKEND_URL: JSON.stringify(process.env.BACKEND_URL),
				NODE_ENV: JSON.stringify('production')
			}
		})
	)
}

module.exports = config
