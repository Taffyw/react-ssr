module.exports = {
  plugins: [
    require('lost'),
    require('postcss-nested'),
    require('postcss-easy-import')({prefix: '_'}), // keep this first
    require('autoprefixer')({
      browsers: ['last 100 versions'],
      cascade: false
    }), // so imports are auto-prefixed too
    require('cssnano')()
  ]
}