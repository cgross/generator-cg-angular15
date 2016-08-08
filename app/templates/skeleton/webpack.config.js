var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./index.ts",
    output: {
        path: './dist',
        filename: "bundle.js"
    },
    devtool: 'source-map',
    devServer: {
        stats: 'errors-only'
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    plugins: [
        new CopyWebpackPlugin([{ from: 'index.html', to: '.'}])
    ],
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },       
    module: {
        loaders: [{ 
            test: /\.tsx?$/, 
            loader: 'ng-annotate'
        },{ 
            test: /\.tsx?$/, 
            loader: 'ts-loader' 
        },{ 
            test: /\.html$/, 
            loader: 'html'
        },{ 
            test: /\.css$/, 
            loader: "style!css" 
        },{ 
            test: /\.scss$/, 
            loader: "style!css!sass" 
        },{
            test   : /\.woff/,
            loader : require.resolve("url-loader") + '?prefix=font/&limit=10000&mimetype=application/font-woff&name=assets/[hash].[ext]'
        },{
            test   : /\.ttf/,
            loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
        },{
            test   : /\.eot/,
            loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
        },{
            test   : /\.svg/,
            loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
        }]
    },
    config: {
        htmlLoader: {
            ignoreCustomFragments: [/\{\{.*?}}/]
        }
    }
};