const { Node } = require('../models');
const NodeService = {
	findAll: async (request, response) => {
		let allNodes = await Node.findAll();
		allNodes = allNodes.map(x => x.dataValues);
		return { 'response': allNodes };
	}
}

module.exports = NodeService;