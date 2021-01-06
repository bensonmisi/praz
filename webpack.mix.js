const mix = require('laravel-mix');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
var webpackConfig = {
    plugins: [
        new CaseSensitivePathsPlugin(),
        new  VuetifyLoaderPlugin()
    ],module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    // other webpack config ...
}
mix.webpackConfig(webpackConfig)
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
