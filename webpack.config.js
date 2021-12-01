const path = require('path');
const loader = require("style-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // mode: "development",
    mode: "production",

    entry: './src/index.js',

    output: {
        // publicPath: 'http://domainName.com/',
		publicPath: "",

		// path: './dist',
		path: path.resolve(__dirname, "./dist"),
        filename: "js/bundle.js",
	},

    module: {
        rules: [
            {
				test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
				// exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						// ES6+ Support
                        presets: ['@babel/preset-env']
						// presets: ["@babel/env"],
						// plugins: ["transform-class-properties"],
						// plugins: ['@babel/plugin-proposal-class-properties']
					},
				},
			},

            {
				test: /\.css$/,
				use: [
					// 'style-loader', 'css-loader',

					MiniCssExtractPlugin.loader, "css-loader",
				],
			},

			{
				test: /\.scss$/,
				use: [
					// Chain of Loaders Invoke RTL direction
					// 'style-loader', 'css-loader', 'sass-loader',
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader",
				],
			},
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
    ]
};