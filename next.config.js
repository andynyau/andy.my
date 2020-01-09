const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: false,
  exportTrailingSlash: false,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };    

    return paths;
  }
});