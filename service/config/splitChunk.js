const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (base) => {

  // 入口优化
  base.entry = {
    index: { import: base.entry, runtime:'solid-runtime' }
  }

  // 文件名
  base.output.filename = '[name].[chunkhash:8].js';

  base.optimization = {
    splitChunks : {
      chunks: 'all', 
      minSize: 500*1000,
      maxSize: 2000*1000,
      maxAsyncSize: 2000*1000,
      minRemainingSize: 2000*1000,
      minChunks: 1,
      maxAsyncRequests: 2,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000
    }
  }

  base.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode:'server',
    analyzerHost:'127.0.0.1',
    analyzerPort:8889,
    reportFilename:'report.html',
    defaultSizes:'parsed',
    openAnalyzer:true,
    generateStatsFile:false,
    statsFilename:'stats.json',
    statsOptions:null,
    logLevel:'info'
  }))

  return base;
}