/**
 * Created by liqp on 2017/8/2.
 */
const client = require('./sequelize').client;

const userModel = client.models.User;
const taskModel = client.models.Task;

(async function () {
	try {
		let insert = await userModel.create({name: 'logoli'});
		await insert.createTask({name: 'logoli', title: '看书', content: '今天5点半看书'});
		let res = await taskModel.findOne({include: [userModel], raw: true});
		console.log(res);
		console.log(res['user.name']);
	}catch (e){
		console.log(e);
	}

}());


