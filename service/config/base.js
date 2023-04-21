const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // mode:'development', // 开发环境
  profile: true,
  entry:path.resolve(__dirname, '../../src/main.ts'),
  output:{
    path:path.resolve(__dirname, '../../dist'),
    filename:'js/[name].js'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../../src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".vue", ".json"],
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:['vue-loader']
      },
      {
        test:/\.tsx?$/, // ts或者tsx
        use:[
          {
            loader:'ts-loader',
            options:{
              transpileOnly: true, // 关闭项目运行时的类型检查
              appendTsSuffixTo:['\\.vue$'], // 用于编译.vue文件中的ts
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        // use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 24 * 1024
          }
        }
      }
    ],
  },
  plugins:[
    new VueLoaderPlugin(), 
    new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({
      templateContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Webpack App</title>
        </head>
        <body>
          <div id="app" >
          </div>
        </body>
      </html>
          `,
    })
  ],
  devServer:{
    port:8080,
    historyApiFallback:true, // 支持history 模式
    static:{
      directory:path.join(__dirname,'public'),
    }
  }
};
