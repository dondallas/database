const Sequelize = require('sequelize');
const config = require('./config');

const user = require('./schema/user');
const task = require('./schema/task');

let sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
	host: config.mysql.host,
	port: config.mysql.port,
	timezone: '+08:00',
	dialect: 'mysql',

	pool: {
		max: 5,
		min: 1,
		idle: 10000
	}
});

user.define(sequelize);
task.define(sequelize);

sequelize.models.Task.belongsTo(sequelize.models.User);
sequelize.models.User.hasOne(sequelize.models.Task);

exports.client = sequelize;


// sequelize.sync({force: true}).then(function (err) {
// 	console.log('init mysql success');
// });
