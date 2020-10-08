module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/incremental-religion/' : '/',
  lintOnSave: false,
  transpileDependencies: [
    'vuetify',
  ],
};
