const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = () => ({
    entry: './src/index.tsx',
    mode: 'development',
    stats: {
        logging: 'error',
    },
    performance: {
        hints: false,
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: ['ts-loader'],
            exclude: /node_modules/,
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
        }],
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
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd(),
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerPort: 3001,
        }),
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true,
        proxy: {
            context: ['/api'],
            target: 'https://dnd4.ru',
            secure: false,
            changeOrigin: true,
        },
    },
    watch: true,
});
