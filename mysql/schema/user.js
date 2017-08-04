/**
 * Created by liqp on 2017/8/2.
 */
const Sequelize = require('sequelize');

exports.define = function (mysql) {
	if (!mysql.models) {
	    mysql.models = {}
	}

	mysql.models.User = mysql.define('userRole', {
		name: {type: Sequelize.STRING, allowNull: false},
		sex: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
	},{
		freezeTableName: true,
		'createdAt': 'createTime',
		'updatedAt': 'updateTime'
	});

	mysql.models.UserSex = mysql.define('user_sex',{
		sex: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true}
	},{
		freezeTableName: true,
		'createdAt': 'createTime',
		'updatedAt': 'updateTime'
	});

	return mysql;
};