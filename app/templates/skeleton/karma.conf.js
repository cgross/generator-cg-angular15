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
            'test_setup.ts',
            '!(node_modules)/**/*-spec.ts'
        ],
        preprocessors: {
            'test_setup.ts': ['webpack'],
            '!(node_modules)/**/*-spec.ts': ['webpack']
        },
        webpack: webpack,
        webpackMiddleware: {
            stats: 'errors-only'
        },
    });
};