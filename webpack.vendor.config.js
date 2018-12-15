const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production', // development
    entry: {
        vendor: ['react', 'react-dom', 'lodash']
    },
    output: {
        path: path.join(__dirname, './dll'),
        filename: '[name]_[hash].js',
        library: '[name]_[hash]',
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: "[name]_[hash]",
            path: path.join(__dirname, "./dll/manifest.json"),
        }),
        new CleanWebpackPlugin(['dll'])
    ]
}
