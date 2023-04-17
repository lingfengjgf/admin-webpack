"use strict";

let base = require("./config/base");
const cache = require("./config/cache");
// const speedMeasurePlugin = require("./config/speedMeasure");
const lazyCompilation = require("./config/lazyCompilation");

// 添加缓存
base = cache(base);

// base = speedMeasurePlugin(base);

base = lazyCompilation(base);

base.mode = "development";
require("./config/devOptimization")(base);

module.exports = base;