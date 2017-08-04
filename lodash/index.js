/**
 * Created by wangxiaohui on 17/7/26.
 */
const _ = require('../node_modules/lodash');
// http://www.jianshu.com/p/7436e40ac5d1
//http://www.bijishequ.com/detail/319522?p=

var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
];

/**
 * find 查询
 */
console.log(`******************* find *******************`);

console.log(_.find(users, function(o) { return o.age < 40; }));

console.log(_.find(users, { 'age': 1, 'active': true }));

console.log(_.find(users, ['active', false]));

console.log(_.find(users, 'active'));

console.log(_.find(users, ['age', _.max(_.map(users, 'age'))]));

/**
 * sample 反单个随机数
 */

console.log(`******************* sample *******************`)

console.log(_.sample([1, 2, 3, 4]));

/**
 * sample 反随机数组
 */

console.log(`******************* sampleSize *******************`)

console.log(_.sampleSize([1, 2, 3], 2));

console.log(_.sampleSize([1, 2, 3], 4));

/**
 * reject 根据条件去除某个元素。
 */

console.log(`******************* reject *******************`)

console.log(_.reject(users, ['user', 'barney']));