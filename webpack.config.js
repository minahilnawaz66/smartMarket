const path = require('path');
const loader = require("style-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');




module.exports = {
    // mode: "development",
    mode: "production",
    entry: './src/index.js',

	devServer: {
		static: {
		  directory: path.join(__dirname, ''),
		},
		compress: true,
		port: 9000,
	  },

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

		new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
		new HtmlWebpackPlugin({
			filename: 'pdp.html',
			template: 'src/pdp.html'
		  }),
		  new HtmlWebpackPlugin({
			filename: 'plp.html',
			template: 'src/plp.html'
		  }),
		  new HtmlWebpackPlugin({
			filename: 'pages/faqs.html',
			template: 'src/pages/faqs.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'pages/blog.html',
			template: 'src/pages/blog.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'pages/contact.html',
			template: 'src/pages/contact.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'pages/aboutUs.html',
			template: 'src/pages/aboutUs.html'
		}),
		  new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
		
		// [new ESLintPlugin({
		// 	extensions: ['.js']
        // })],

		  
    ],
	performance :{
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	 },

};

