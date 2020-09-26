const { Module } = require('../models');
const ModuleService = {
	findAll: async (request, response) => {
		let allModules = await Module.findAll();
		allModules = allModules.map(x => x.dataValues);
		return { 'response': allModules };
	}
}

module.exports = ModuleService;