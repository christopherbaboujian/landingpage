const path = require('path');

module.exports = {
  env: { API: process.env.API },
  assetPrefix: process.env.DOMAIN,
  webpack: (config) => {
    config.resolve.alias.components = path.join(__dirname, 'components');
    config.resolve.alias.hocs = path.join(__dirname, 'hocs');
    config.resolve.alias.lib = path.join(__dirname, 'lib');
    return config;
  },
};
