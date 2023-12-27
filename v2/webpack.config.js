module.exports = {
	devtool: 'source-map',
	watch: true,
	entry: {
		filename: './js/script.js', // Путь в наш js файл
	},
	output: {
		filename: 'bundle.js', // Этот файл который будет на выходе
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
