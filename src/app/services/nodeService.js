const NodeModel = require('../models/node');
const NodeService = {
	findAll: async (request, response) => {
		let allNodes = await NodeModel.findAll();
		allNodes = allNodes.map(x => x.dataValues);
		return { 'response': allNodes };
	}
}

module.exports = NodeService;