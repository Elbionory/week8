const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        joke: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(svg||png||jpeg||jpg||gif)$/i,
                type: 'asset/resource',
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Dad'sjoke",
            filename: "joke.html",
            template: 'src/template.html'
        })
    ]
}
