const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

module.exports = (base) => {

  let vueLoader = base.plugins.shift(); // 不对vue-loader进行包装 解决vue-loader冲突问题
  base = smp.wrap(base);
  base.plugins.unshift(vueLoader);
  return base;

}
