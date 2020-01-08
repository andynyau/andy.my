const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: false,
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' }
    };    

    return paths;
  }
});