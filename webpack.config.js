// import대신 require사용하고 nodejs에서 제공하는 전역 모듈인 path 갖고 온다 
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과를(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,    // css, scss파일을 찾는다 ?의 용도는 앞에 있는 s가 있을 수도 없을 수 도 있다는 뜻이다. 
        use: [
          'style-loader',  // 순서대로 작성해야 한다. 
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'}
      ]
    })
  ],

  // devServer: {
  //   host: 'localhost'
  // }
}