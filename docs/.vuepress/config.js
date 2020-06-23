const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  title: 'awesome-architecture',
  description: 'awesome-architecture',
  head: headConf,
  plugins: pluginConf,

  themeConfig: {
    search: false,
    nav: navConf,
    sidebarDepth: 2,
  }
}