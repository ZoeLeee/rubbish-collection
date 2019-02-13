const { addBabelPlugins,override,disableEsLint,addPostcssPlugins,addLessLoader,overrideDevServer  } = require('customize-cra');

const theme = require('./package.json').theme;

module.exports = {
  webpack: override(
    disableEsLint(),
    ...addBabelPlugins(
      ['import', { libraryName: 'antd-mobile', style: true }],
      "react-hot-loader/babel"
    ),
    addPostcssPlugins([
      require('postcss-px2rem')({ remUnit:37.5 })
    ]),
    addLessLoader({
      strictMath: true,
      noIeCompat: true,
      modifyVars: theme,
      javascriptEnabled: true
    })
  ),
  devServer: overrideDevServer(
    // dev server plugin
  )
};