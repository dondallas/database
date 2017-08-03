/**
 * Created by wangxiaohui on 17/7/28.
 */
const async = require('../node_modules/async');

let items = ["1","2","3"];
async.each(items, function(item, cb) {});

async.eachLimit(items, 1, function (item, cb) {cb()});

async.waterfall([
        function(done){
            done(null, '1')
        },
        function(result, done){
            done(null, result)
        },
    ],function(error, result){});

async.parallel({
        func1: function(done){
            done(null, '1')
        },
        func2: function(done){
            done(null, '2')
        },
    },function(error, results){});


