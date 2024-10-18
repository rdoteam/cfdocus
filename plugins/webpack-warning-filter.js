// plugins/webpack-warning-filter.js

module.exports = function () {
    return {
      name: 'webpack-warning-filter',
      configureWebpack() {
        return {
          stats: {
            warningsFilter: [
              /No serializer registered for VFileMessage/,
            ],
          },
        };
      },
    };
  };
  