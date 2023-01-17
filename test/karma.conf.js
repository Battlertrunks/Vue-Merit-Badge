const webpackConfig = require('../node_modules/@vue/cli-service/webpack.config.js');

module.exports = function(config) {
    const conf = {
        basePath: './',
        framework: ['sinon-chai', 'mocha'],
        reporters: ['mocha'],
        browsers: ['ChromeHeadless'],
        autoWatch: false,
        singleRun: true,
        browserNoActivityTimeout: 30000,
        browserDisconnectTolerance: 2,
        colors: true,
        devtool: 'none',

    preprocessors: {
        '../**/*.spec.js': ['webpack'],
        './**/*.js': ['webpack']
    },

    webpack: {
        ...webpackConfig,
    },
    webpackMiddleware: {
        stats: 'error-only'
    },

    files: [
        './globals-config.js',
        '../src/**/*.spec.*'
    ],
    };

    config.set(conf);
}