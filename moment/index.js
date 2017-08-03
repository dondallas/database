/**
 * Created by wangxiaohui on 17/8/2.
 */
const moment = require('../node_modules/moment');

console.log(`当前时间：${moment().format('YYYY-MM-DD HH:mm:ss')}`);

console.log(`今天是星期几：${moment().format('d')}`);

console.log(`当前时间戳：${moment().format('x')}`);

console.log(`${moment("20120901", "YYYYMMDD").fromNow()}`);

console.log(`7天后的日期：${moment().add(7,'days').format('YYYY年MM月DD日')}`);

console.log(`7天前的日期：${moment().subtract(7,'days').format('YYYY年MM月DD日')}`);