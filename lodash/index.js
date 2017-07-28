/**
 * Created by wangxiaohui on 17/7/26.
 */
const _ = require('../lodash');
const fp = require('../lodash/fp');
// http://www.jianshu.com/p/7436e40ac5d1


console.log(_.map(['6', '8', '10'], parseInt));
// → [6, NaN, 2]
console.log(fp.map(parseInt)(['6', '8', '10']))

_.times(5, function(index,ss){

});