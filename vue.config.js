module.exports = {
  lintOnSave: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/vars.scss";
                      @import "~@/assets/scss/mixins.scss";`,
      },
    },
  },
};
