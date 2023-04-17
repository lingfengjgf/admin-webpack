module.exports = (base) => {
  base.optimization = {
    removeAvailableModules:false, // 检测并移除已包含在父模块中的多余模块
    removeEmptyChunks:false,
    splitChunks:false, // 代码分包
    minimize:false, // 代码压缩
    concatenateModules:false, // 合并模块
    usedExports:false, // TreeShaking
  }
}