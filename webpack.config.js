const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body',
});
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
    const env = dotenv.config().parsed;

    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    const plugins = [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin({ filename: '[name].[hash].css', disable: false, allChunks: true }),
        new webpack.DefinePlugin(envKeys),
    ];

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve('dist'),
            filename: 'bundle.js',
        },
        devServer: {
            port: 9000,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    enforce: 'pre',
                    use: [
                        {
                            options: {
                                formatter: eslintFormatter,
                                eslintPath: require.resolve('eslint'),
                            },
                            loader: require.resolve('eslint-loader'),
                        },
                    ],
                },
                {
                    oneOf: [
                        {
                            test: /\.(js|jsx)$/,
                            loader: require.resolve('babel-loader'),
                            options: {
                                presets: ['es2015', 'stage-2', 'react'],
                                cacheDirectory: true,
                            },
                        },
                        {
                            test: /\.css$/,
                            use: ['style-loader', 'css-loader'],
                        },
                    ],
                },
            ],
        },
        plugins,
        node: {
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
        },
    };
};
