var webpack = require('./webpack.config.js');
delete webpack.output;
delete webpack.entry;
delete webpack.module.preLoaders;

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        reporters:['mocha'],
        browsers: ['PhantomJS'],
        files: [
            'test_setup.js',
            '!(node_modules)/**/*-spec.js'
        ],
        preprocessors: {
            'test_setup.js': ['webpack'],
            '!(node_modules)/**/*-spec.js': ['webpack']
        },
        webpack: webpack,
        webpackMiddleware: {
            stats: 'errors-only'
        },
    });
};