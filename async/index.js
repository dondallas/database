/**
 * Created by wangxiaohui on 17/7/28.
 */
const async = require('../node_modules/async');

/**
 * 该函数用于并行迭代数组的每个元素
 * @type {string[]}
 */
let items = ["1","2","3"];
async.each(items, function(item, cb) {
    console.log(item)
    //cb()
});

/**
 * each函数的增强版，增加了一个limit参数，用于限制并行执行的最大数量。
 */
async.eachLimit(items, 1, function (item, cb) {
    console.log(item);
    cb()
});

/**
 * 串行 有关联 async.waterfall
 */
async.waterfall([
        function(done){
            done(err, 结果) //将结果写入result
        },
        function(result, done){
            //result即上一步写入的结果
            done(err, 返回结果)
        },
    ],function(error, result){});

/**
 * 和series格式一样，根据依赖关系自动控制串行、并行
 */
async.auto({
        func1: function(done){
            done(err, 要写入func1的结果)
        },
        func2: ["func1", function(done, results){ //依赖func1
            //results = {func1: xxx};
            done(err, 返回结果)
        }],
        func3: ["func2", function(done, results){
        }]
    }, function(error, results){
        results = {func1: xxx, func2: xxx, func3: xxx};
    });


/**
 * 某步出错不影响其他步骤执行，最后结果中的error是第一个出现的error
 */
async.parallel({
        func1: function(done){
            done(err, results)
        },
        func2: function(done){
            done(err, results)
        },
    },function(error, results){});
