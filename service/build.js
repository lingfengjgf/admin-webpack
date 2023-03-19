let base = require("./config/base");
const cache = require("./config/cache");
const speedMeasurePlugin = require("./config/speedMeasure");


// 添加缓存
// base = cache(base);

// base = speedMeasurePlugin(base);

// require("./config/exclude")(base);

// require("./config/noParse")(base);

base.mode = "production";

module.exports = base;