const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        liveReload: true,
        hot: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: './src/index.html',
            template: './src/index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/images", to: "./images" },
            ],
        }),
    ],
    resolve: {
        fallback: {
          util: false
        }
    }
};
