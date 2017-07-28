/**
 * Created by wangxiaohui on 17/7/26.
 */
/**
 * 文档
 * http://www.jianshu.com/p/5683c8a93511
 */

//公共引用
const fs = require('../fs'),
    path = require('../path');


/**
 * 读文件
 */

fs.readFile(__dirname + '/test.txt', {flag: 'r+', encoding: 'utf8'}, function (err, data) {
    if(err) return;
    console.log(`${data}读取成功`);
});

/**
 * 写文件
 * @type {string}
 */
let data = `这是一段通过fs.writeFile函数写入的内容；\r\n`;
let w_data = new Buffer(data);
fs.writeFile(__dirname + '/test.txt', w_data, {flag: 'a'}, function (err) {
    if(err) return;
    console.log(`写入成功`);
});

/**
 *以追加方式写文件
 */
fs.appendFile(__dirname + '/test.txt', '使用fs.appendFile追加文件内容', function () {
    console.log('追加内容完成');
});

/**
 * 读文件，读取打开的文件内容到缓冲区中；
 */

fs.open(__dirname + '/test.txt', 'r', '0666', function (err, fd) {
    console.log(fd);
});

/**
 * 读文件，读取打开的文件内容到缓冲区中；
 */

fs.open(__dirname + '/test.txt', 'r', function (err, fd) {
    if(err) {
        console.error(err);
        return;
    } else {
        var buffer = new Buffer(255);
        console.log(buffer.length);
        //每一个汉字utf8编码是3个字节，英文是1个字节
        fs.read(fd, buffer, 0, 9, 3, function (err, bytesRead, buffer) {
            if(err) {
                throw err;
            } else {
                console.log(bytesRead);
                console.log(buffer.slice(0, bytesRead).toString());
                //读取完后，再使用fd读取时，基点是基于上次读取位置计算；
                fs.read(fd, buffer, 0, 9, null, function (err, bytesRead, buffer) {
                    console.log(bytesRead);
                    console.log(buffer.slice(0, bytesRead).toString());
                });
            }
        });
    }
});
