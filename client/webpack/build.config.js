const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = () => ({
    entry: ['./src/main.tsx'],
    mode: 'production',
    stats: {
        logging: 'error',
    },
    performance: {
        hints: false,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            }, {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                    publicPath: '/',
                },
            }, {
                test: /\.(mp4)$/i,
                loader: 'file-loader',
                options: {
                    name: 'video/[name].[ext]',
                    publicPath: '/',
                },
            }, {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts',
                        publicPath: '/fonts',
                    },
                }],
            },
        ],
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src'),
        },
        modules: ['node_modules'],
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            templateParameters: (_, outputParameters) => ({
                jsBundle: `${outputParameters.js[0]}`,
            }),
            template: 'webpack/index.ejs',
            inject: false,
        }),
    ],
});
