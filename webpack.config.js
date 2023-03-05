const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development', // 开发环境
  entry:path.resolve(__dirname,'./src/main.ts'),
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'js/[name].js'
  },
  resolve:{
    alias:{
      '@':path.resolve('src')
    },
    extensions:['.ts', '.tsx', '.js', '.jsx', '.vue', '.json']
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:['vue-loader']
      },
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test:/\.tsx?$/, // ts或者tsx
        exclude:/node_modules/,
        use:[
          {
            loader:'ts-loader',
            options:{
              appendTsSuffixTo:['\\.vue'], // 用于编译.vue文件中的ts
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        type: 'asset',
        generator: { filename: 'img/[contenthash:8][ext][query]' },
      },
    ]
  },
  plugins:[
    new CleanWebpackPlugin(), 
    new VueLoaderPlugin(), 
    new HtmlWebpackPlugin({
    templateContent:`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Admin Webpack</title>
        <script defer src="js/main.js"></script>
      </head>
      <body>
        <div id="app"></div>
      </body>
    </html>`
  })],
  devServer:{
    port:8080,
    historyApiFallback:true, // 支持history 模式
    static:{
      directory:path.join(__dirname,'public'),
    }
  }
}