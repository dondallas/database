/**
 * Created by wangxiaohui on 17/8/4.
 */
const  transliteration = require('../node_modules/transliteration');

console.log(transliteration.transliterate('你好，世界')); // Ni Hao ,Shi Jie

console.log(transliteration.slugify('你好，世界')); // ni-hao-shi-jie

console.log(transliteration.slugify('你好，世界', {lowercase: false, separator: '_'})); // Ni_Hao_Shi_Jie