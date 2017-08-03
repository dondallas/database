/**
 * Created by wangxiaohui on 17/8/2.
 */

const xlsx = require('../node_modules/node-xlsx');
const _ = require('../node_modules/lodash');
const async = require('../node_modules/async');
const fs = require('fs');
//读取文件内容
let obj = xlsx.parse(__dirname+'/test.xlsx');
let excelObj=obj[0].data;

let arr = function (excelObj) {
    let data = [];
    for(let i in excelObj){
        let arr=[];
        let value=excelObj[i];
        for(let j in value){
            arr.push(value[j]);
        }
        data.push(arr);
    }
    return data;
};

/**
 * 生成excel
 */
let buffer = xlsx.build([
    {
        name:'sheet1',
        data:arr(excelObj)
    }
]);

fs.writeFileSync('test1.xlsx',buffer,{'flag':'w'});

/**
 * 生成json
 */
async.waterfall([
    function(cb) {
        let arr = [];
        _.forEach(excelObj[0],function (name) {
            arr.push(name)
        });
        cb(null,arr)
    },
    function(arr, cb) {
        let arrs=[];
        _.forEach(_.tail(excelObj),function (name,index) {
            let json = {};
            for(let j in name){
                json[`${arr[j]}`] = `${name[j]}`;
            }
            arrs.push(json);
        });
        cb(null,arrs);
    },
], function (err, result) {
    if(err){
        return
    }
    fs.writeFileSync('test2.json',JSON.stringify(result));
});




