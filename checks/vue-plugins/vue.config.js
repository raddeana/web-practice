module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          if (!options)
            options = {};
          options.shadowMode = true
          return options
        });
      
      // config.module.rule('css').oneOf('vue').use('extract-css-loader').clear();
      // config.module.rule('scss').oneOf('vue').use('extract-css-loader').clear();

      config.module
        .rule('css')
        .oneOf('vue')
        .use('vue-style-loader')
          .loader('vue-style-loader')
          .tap(options => {
            if (!options)
              options = {};
            options.shadowMode = true
            return options
          });

    config.module
      .rule('scss')
      .oneOf('vue')
      .use('vue-style-loader')
        .loader('vue-style-loader')
        .tap(options => {
          if (!options)
            options = {};
          options.shadowMode = false
          return options
        });
  }
};