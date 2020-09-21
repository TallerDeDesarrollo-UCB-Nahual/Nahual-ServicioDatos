const ModuleModel = require('../models/module');
const ModuleService = {
	findAll: async (request, response) => {
		let allModules = await ModuleModel.findAll();
		allModules = allModules.map(x => x.dataValues);
		return { 'response': allModules };
	}
}

module.exports = ModuleService;