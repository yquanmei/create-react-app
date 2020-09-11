const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const theme = require('./theme');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: theme
    }
  })
);
