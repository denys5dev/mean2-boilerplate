var webpasck = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './assets/main.ts',
    output: {
        path: './public/js',
        publicPath: '/js/',
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.pug', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.component.ts$/,
                loader: 'ts!angular2-template'
            },
            {
                test: /\.ts$/,
                exclude: /\.component.ts$/,
                loader: 'ts'
            },
            {
                test: /\.pug$/,
                exclude: /index.pug/,
                loader: 'pug-ng-html'
            },
            {
                test: /\.scss$/,
                loaders: ['raw-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './assets/index.pug',
                filename: '../../views/index.pug',
                filetype: 'pug'
        }),
        new HtmlWebpackPugPlugin()
        // new webpack.DefinePlugin({
        //     app: {
        //         enviroment: JSON.stringify(process.env.APP_ENVIROMENT || 'development') 
        //     }
        // })
    ]
};