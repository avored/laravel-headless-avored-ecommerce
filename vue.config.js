module.exports = {
    // Other options...
    pluginOptions: {
      // Apollo-related options
      apollo: {
        lintGQL: true
      },
    },

    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
          .loader('vue-loader')
          .tap(options => {
            options.transpileOptions = {
              transforms: {
                dangerousTaggedTemplateString: true,
              },
            }
            return options
          })
    }
  }
