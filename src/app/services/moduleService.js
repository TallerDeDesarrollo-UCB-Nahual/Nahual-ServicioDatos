const ModuleModel = require('../models/module');
const ModuleService = {
	findAll: async (request, response) => {
		let allNodes = await ModuleModel.findAll();
		allNodes = allNodes.map(x => x.dataValues);
		return { 'resultSet': allNodes };
	}
}

module.exports = ModuleService;