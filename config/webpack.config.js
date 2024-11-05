const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const basicConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../templates/index.html'),
        }),
        new CopyPlugin({
            patterns: [{ from: path.resolve(__dirname, '../assets'), to: path.resolve(__dirname, '../dist/assets') }],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                ],
            },
            {
                test: /\.module\.css$/i, 
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                    },
                },
            }],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@hooks': path.resolve(__dirname, '../src/hooks'),
        },
    },
    devServer: {
        port: 4000,
    },
};

module.exports = basicConfig;
