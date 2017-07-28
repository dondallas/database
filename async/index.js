/**
 * Created by wangxiaohui on 17/7/28.
 */
const async = require('../node_modules/async');

/**
 * 该函数用于并行迭代数组的每个元素
 * @type {string[]}
 */
let items = ["1","2","3"];
async.each(items, function(item, callback) {
    console.log(item)
});