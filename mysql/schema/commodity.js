/**
 * Created by wangxiaohui on 17/8/7.
 */
const Sequelize = require('sequelize');

exports.define = function (mysql) {

    if(!mysql.models){
        mysql.models = {};
    }

    mysql.models.Task = mysql.define('task', {
        name: {type: Sequelize.STRING, allowNull: false},
        title: {type: Sequelize.STRING, allowNull: false},
        content: {type: Sequelize.STRING, allowNull: true},
    },{
        freezeTableName: true,
        'createdAt': 'createTime',
        'updatedAt': 'updateTime'
    });

    return mysql;
};